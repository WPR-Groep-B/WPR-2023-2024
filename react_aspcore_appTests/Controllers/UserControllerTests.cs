using NUnit.Framework;
using Moq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.InMemory;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;

namespace Tests
{
    [TestFixture]
    public class UserControllerTests
    {
        [Test]
        public void GenerateJwtToken_ReturnsValidToken()
        {
            // Arrange
            var user = new gebruiker
            {
                GebruikerId = 1,
                email = "test@example.com",
                Voornaam = "John",
                Achternaam = "Doe"
            };

            var options = new DbContextOptionsBuilder<SampleDBContext>()
                .UseInMemoryDatabase(databaseName: Guid.NewGuid().ToString()) // Use unique in-memory database for each test
                .Options;

            // Use a clean instance of context for each test
            using (var context = new SampleDBContext(options))
            {
                context.gebruikers.Add(user);
                context.SaveChanges();
            }

            // Use a separate instance of context to verify the changes made by the test
            using (var context = new SampleDBContext(options))
            {
                var controller = new UserController(context);

                // Act
                var token = controller.GenerateJwtToken(user);

                // Assert
                Assert.IsNotNull(token);
                Assert.IsNotEmpty(token);
            }
        }

        [Test]
        public void Get_ReturnsAllUsers()
        {
            // Arrange
            var user1 = new gebruiker
            {
                GebruikerId = 1,
                email = "test1@example.com",
                Voornaam = "John",
                Achternaam = "Doe"
            };

            var user2 = new gebruiker
            {
                GebruikerId = 2,
                email = "test2@example.com",
                Voornaam = "Jane",
                Achternaam = "Doe"
            };

            var options = new DbContextOptionsBuilder<SampleDBContext>()
                .UseInMemoryDatabase(databaseName: Guid.NewGuid().ToString()) // Use unique in-memory database for each test
                .Options;

            // Use a clean instance of context for each test
            using (var context = new SampleDBContext(options))
            {
                context.gebruikers.Add(user1);
                context.gebruikers.Add(user2);
                context.SaveChanges();
            }

            // Use a separate instance of context to verify the changes made by the test
            using (var context = new SampleDBContext(options))
            {
                var controller = new UserController(context);

                // Act
                var result = controller.Get();

                // Assert
                var okResult = result.Result as OkObjectResult;
                Assert.IsNotNull(okResult);
                var users = okResult.Value as List<gebruiker>;
                Assert.AreEqual(2, users.Count);
            }
        }

        [Test]
        public void Login_ValidCredentials_ReturnsUserAndToken()
        {
            // Arrange

            var user = new gebruiker
            {
                GebruikerId = 1,
                Voornaam = "John",
                Achternaam = "Doe",
                email = "test@example.com",
                wachtwoord = "hashedPassword" // Replace with actual hashed password
            };

            var passwordHasher = new PasswordHasher<gebruiker>();
            var plainPassword = "poep"; // Replace with the actual password
            var hashedPassword = passwordHasher.HashPassword(user, plainPassword);

            user.wachtwoord = hashedPassword;

            var loginModel = new LoginModel
            {
                Email = "test@example.com",
                Wachtwoord = "poep" // Replace with actual password
            };

            var options = new DbContextOptionsBuilder<SampleDBContext>()
                .UseInMemoryDatabase(databaseName: Guid.NewGuid().ToString()) // Use unique in-memory database for each test
                .Options;

            // Use a clean instance of context for each test
            using (var context = new SampleDBContext(options))
            {
                context.gebruikers.Add(user);
                context.SaveChanges();
            }

            // Use a separate instance of context to verify the changes made by the test
            using (var context = new SampleDBContext(options))
            {
                var controller = new UserController(context);

                // Act
                var result = controller.Login(loginModel);

                // Assert
                

                var okResult = result.Result as OkObjectResult;

                Assert.IsNotNull(okResult, "OkResult is null");
                Assert.IsNotNull(okResult.Value, "OkResult.Value is null");
            }
        }
    }
}