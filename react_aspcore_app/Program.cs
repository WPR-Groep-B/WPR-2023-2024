using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews();

builder.Services.AddControllers();
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<SampleDBContext>(options => options.UseSqlServer(connectionString));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();


app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");

  // CORS - Allow calling the API from WebBrowsers
        app.UseCors(x => x
            .AllowAnyMethod()
            .AllowAnyHeader()
            .AllowCredentials()
            //.WithOrigins("https://localhost:44351")); // Allow only this origin can also have multiple origins seperated with comma
            .SetIsOriginAllowed(origin => true));// Allow any origin

app.Run();