const about = document.querySelector("#about"), contact = document.querySelector("#contact"), aboutContent = document.querySelector("#about-content"), contactContent = document.querySelector("#contact-content"); about.addEventListener("click", () => { new WinBox({ title: "Deployment Info", width: "400px", height: "550px", top: 10, right: 0, bottom: 100, left: 0, mount: aboutContent, onfocus: function () { this.setBackground("#00aa00") }, onblur: function () { this.setBackground("#777") } }) }); var app = document.getElementById("app"), typewriter = new Typewriter(app, { loop: !1, delay: 75, autoStart: !0, cursor: "|", strings: ["sudo apt-get update"] }); typewriter.deleteAll(1).pauseFor(50).deleteAll(1).typeString("sudo apt-get install").pauseFor(50).deleteAll(1).pauseFor(50).deleteAll(1).typeString("kubectl get pods").pauseFor(50).deleteAll(1).typeString("...").deleteAll(1).pauseFor(1e3);