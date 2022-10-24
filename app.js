// --- BOILER -- //
import express from "express";
import fs from "fs";

const app = express();
app.use(express.static("public"))

// --- COMPONENTS --- //
const header = fs.readFileSync("./public/components/header/header.html").toString();
const aside = fs.readFileSync("./public/components/aside/aside.html").toString();
const footer = fs.readFileSync("./public/components/footer/footer.html").toString();

const admin = fs.readFileSync("./public/admin/admin.html").toString();
const create = fs.readFileSync("./public/admin/create.html").toString();
// ----------------- //


//const dir = fs.readdirSync("./public/notes").toString().split(",");
// let filename = "uge 35.txt"
// let mainFile = fs.readFileSync("./public/notes/" + filename)
// const mainMain = mainFile.toString();

// --- PATHS --- //

app.get("/", (req, res) => {
    const main = fs.readFileSync("./public/notes/" + "uge 35.txt").toString(); 
    const page = header.replace("%%DOCUMENT_TITLE%%", "documentation") + aside + main + footer;
    res.send(page);
});

app.get("/documentation/:path", (req, res) => {
    const path = req.params.path;
    console.log(path);

    const main = fs.readFileSync("./public/notes/" + path + ".txt").toString();

    const page = header.replace("%%DOCUMENT_TITLE%%", path) + aside + main + footer;
    res.send(page);
});

app.get("/admin", (req, res) => {
    const page = header.replace("%%DOCUMENT_TITLE%%", "🔑") + aside + admin + footer;
    res.send(page);
});

app.get("/create", (req, res) => {
    const page = header.replace("%%DOCUMENT_TITLE%%", "📝") + aside + create + footer;
    res.send(page);
});

// --- PORT --- //
app.listen(8080, (error) => {
    console.log("Server is running on port", 8080);
})