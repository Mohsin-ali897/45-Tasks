let users: string[] = ["admin", "Haseeb", "Hassan", "Yasoob", "haider"];
for (let user of users) {
  if (user === "admin") {
    console.log("Hello Admin would you like to see a status of report");
  } else {
    console.log(`hello ${user} thank you for logging in again`);
  }
}
