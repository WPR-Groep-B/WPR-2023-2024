using Microsoft.AspNetCore.SignalR;

namespace react_aspcore_app.Hubs
{
    public class ChatHub : Hub
    {
        
        private readonly IDictionary<string , UserConnection> _Connections;
        private readonly String _System; 

        public ChatHub(IDictionary<string , UserConnection> Connections) {
            _Connections = Connections;
            _System = "Systeem";
        }

        public override async Task OnDisconnectedAsync(Exception? exception)
        {
            if (_Connections.TryGetValue(Context.ConnectionId, out UserConnection? userConnection))
            {
                _Connections.Remove(Context.ConnectionId);
                await Clients.Group(userConnection.Room).SendAsync("ReceiveMessage", _System, $"{userConnection.UserName} has left {userConnection.Room}");
            }
        }

        public async Task sendMessage(string message)
        {
            if (_Connections.TryGetValue(Context.ConnectionId, out UserConnection? userConnection))
            {
                await Clients.Group(userConnection.Room).SendAsync("ReceiveMessage", userConnection.UserName, message);
            }
        }

        public async Task joinroom(UserConnection userConnection)
        {

            _Connections[Context.ConnectionId] = userConnection;

            await Groups.AddToGroupAsync(Context.ConnectionId, userConnection.Room); // Add user to group
            await Clients.Group(userConnection.Room).SendAsync("ReceiveMessage", _System , $"{userConnection.UserName} has joined {userConnection.Room}"); // Send message to all clients in group
        }
    }
}
