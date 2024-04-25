import { dirname } from "path";
import { fileURLToPath } from "url";
import { join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default function customAuth(req, res, next) {
    if (req.body.password === "Ashish") {
        const secretFilePath = join(__dirname, "../public/secret.html");
        console.log(secretFilePath)
        res.sendFile(secretFilePath);
    } else {
        res.redirect("/");
        return;
    }
    next();
}
