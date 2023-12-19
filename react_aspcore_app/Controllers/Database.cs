// using System.Data.SqlClient;
// public abstract class DatabaseService
// {
//     protected readonly string _connectionString;

//     protected DatabaseService(IConfiguration configuration)
//     {
//         _connectionString = configuration.GetConnectionString("DefaultConnection");
//     }

//     // Methode om de database te testen
//     public abstract Task TestDatabaseConnection();
// }

// public class SqlDatabaseService : DatabaseService
// {
//     public SqlDatabaseService(IConfiguration configuration) : base(configuration) { }

//     public override async Task TestDatabaseConnection()
//     {
//         try
//         {
//             using var connection = new SqlConnection(_connectionString);
//             await connection.OpenAsync();
//             Console.WriteLine("Verbinding met de database is succesvol.");
//         }
//         catch (Exception ex)
//         {
//             Console.WriteLine($"Fout bij het verbinden met de database: {ex.Message}");
//         }
//     }
// }