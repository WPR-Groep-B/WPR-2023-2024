using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration.UserSecrets;

namespace react_aspcore_app.Hubs
{
    public class ChatHub : Hub
    {

        private readonly IDictionary<string, UserConnection> _Connections;
        private readonly string _System;
        //database context
        private readonly SampleDBContext _DBcontext;


        public ChatHub(IDictionary<string, UserConnection> Connections, SampleDBContext DBcontext)
        {
            _Connections = Connections;
            _System = "Systeem";
            _DBcontext = DBcontext;
        }

        public override async Task OnDisconnectedAsync(Exception? exception)
        {
            if (_Connections.TryGetValue(Context.ConnectionId, out UserConnection? userConnection))
            {
                _Connections.Remove(Context.ConnectionId);
                await Clients.Group(userConnection.Room).SendAsync("ReceiveMessage", _System, $"{userConnection.UserName} has left {userConnection.Room}");
            }
        }
        [Authorize]
        public async Task sendMessage(string message)
        {
            if (_Connections.TryGetValue(Context.ConnectionId, out UserConnection? userConnection))
            {
                int userId = int.Parse(userConnection.UserId);
                var newMessage = new Message
                {
                    Room = userConnection.Room,
                    GebruikerId = userId,
                    Text = message,
                    Timestamp = DateTime.UtcNow
                };
                _DBcontext.Messages.Add(newMessage);
                await _DBcontext.SaveChangesAsync();

                await Clients.Group(userConnection.Room).SendAsync("ReceiveMessage", userConnection.UserName, message);
            }
        }
        [Authorize]
        public async Task joinroom(UserConnection userConnection)
        {

            _Connections[Context.ConnectionId] = userConnection;

            await Groups.AddToGroupAsync(Context.ConnectionId, userConnection.Room); // Add user to group
            await Clients.Group(userConnection.Room).SendAsync("ReceiveMessage", _System, $"{userConnection.UserName} has joined {userConnection.Room}"); // Send message to all clients in group
        }
        [Authorize]
        public async Task getHistory(string room)
        {
            var history = await _DBcontext.Messages
                .Where(m => m.Room == room)
                .OrderBy(m => m.Timestamp)
                .Select(m => new { userName = m.gebruiker.Voornaam + " " + m.gebruiker.Achternaam, m.gebruiker, text = m.Text })
                .ToListAsync();
            await Clients.Caller.SendAsync("getHistory", history);
        }
    }
}
