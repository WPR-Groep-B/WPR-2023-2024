using Microsoft.AspNetCore.SignalR;

namespace react_aspcore_app.Hubs
{
    public class ChatHub : Hub
    {
        public async Task JoinRoom(UserConnection userConnection)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, userConnection.ChatRoom); // Add user to group
            await Clients.Group(userConnection.ChatRoom).SendAsync("JoinRoom", userConnection.UserName, $"{userConnection.UserName} has joined {userConnection.ChatRoom}"); // Send message to all clients in group
        }
    }
}
