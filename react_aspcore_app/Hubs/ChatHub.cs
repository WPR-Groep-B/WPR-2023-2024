using Microsoft.AspNetCore.SignalR;

namespace react_aspcore_app.Hubs
{
    public class ChatHub : Hub
    {
        public async Task joinroom(UserConnection userConnection)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, userConnection.Room); // Add user to group
            await Clients.Group(userConnection.Room).SendAsync("ReceiveMessage","Kever", $"{userConnection.UserName} has joined {userConnection.Room}"); // Send message to all clients in group
        }
    }
}
