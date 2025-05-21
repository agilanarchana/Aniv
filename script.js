
function starConfetti(event) {
    event.preventDefault(); // Prevents navigating immediately
    launchConfetti();

}
function startConfetti(event) {
    event.preventDefault(); // Prevents navigating immediately
    launchConfetti();
    setTimeout(() => {
        window.location.href = "memory.html"; // Redirects after animation
    }, 2000);
}

function launchConfetti() {
    const canvas = document.getElementById("confetti");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const confettiPieces = [];
    const colors = ["#ff1493", "#ff69b4", "#ffb6c1", "#ffffff", "#ff85a2"];

    for (let i = 0; i < 100; i++) {
        confettiPieces.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 10 + 5,
            speedX: (Math.random() - 0.5) * 5,
            speedY: Math.random() * 5 + 2,
            color: colors[Math.floor(Math.random() * colors.length)]
        });
    }

    function drawConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        confettiPieces.forEach((p) => {
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
        });
    }

    function updateConfetti() {
        confettiPieces.forEach((p) => {
            p.y += p.speedY;
            p.x += p.speedX;
            if (p.y > canvas.height) {
                p.y = 0;
                p.x = Math.random() * canvas.width;
            }
        });
    }

    function animate() {
        drawConfetti();
        updateConfetti();
        requestAnimationFrame(animate);
    }

    animate();
}

///

document.getElementById("candle").addEventListener("click", function() {
    this.style.backgroundColor = "gray";
    alert("Make a wish! 🎂✨");
});
/////////////
// memorypage
function showPaperBlast() {
    const blastContainer = document.getElementById("paper-blast");

    for (let i = 0; i < 100; i++) { // Number of paper pieces
        let paper = document.createElement("div");
        paper.classList.add("paper-piece");

        // Random positions
        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;
        
        // Random rotation
        let rotate = Math.random() * 360;

        // Random delay for staggered effect
        let delay = Math.random() * 0.5;

        // Random color
        let colors = ["#ff69b4", "#ff1493", "#ff4500", "#ffcc00", "#32cd32", "#1e90ff"];
        let color = colors[Math.floor(Math.random() * colors.length)];
        paper.style.backgroundColor = color;

        paper.style.left = `${x}px`;
        paper.style.top = `${y}px`;
        paper.style.transform = `rotate(${rotate}deg)`;
        paper.style.animation = `popPaper 1.5s ease-out ${delay}s forwards`;

        blastContainer.appendChild(paper);
    }

    // Remove papers after animation
    setTimeout(() => {
        blastContainer.innerHTML = "";
    }, 2000);
}

document.addEventListener("DOMContentLoaded", () => {
    const flame = document.getElementById("flame");

    // Click to blow out the candle
    flame.addEventListener("click", () => {
        flame.style.animation = "fadeOut 0.5s forwards";
        
        setTimeout(() => {
            flame.style.display = "none"; // Hide after animation
        }, 500);

        // Optional: Add blowing sound
        let blowSound = new Audio("blow.mp3");
        blowSound.play();
    });
});
