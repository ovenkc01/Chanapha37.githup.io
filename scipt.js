// เอฟเฟกต์พิมพ์ข้อความวิ่งอัตโนมัติ (Typing Effect) สำหรับชื่อคุณชนาภา
document.addEventListener('DOMContentLoaded', () => {
    const titleElement = document.querySelector('header h1');
    const text = "ชนาภา สายโค้ด (Chanapha Dev)";
    let index = 0;

    if (titleElement) {
        titleElement.textContent = ""; // ล้างตัวอักษรก่อนเริ่มเอฟเฟกต์
        
        function typeWriter() {
            if (index < text.length) {
                titleElement.textContent += text.charAt(index);
                index++;
                setTimeout(typeWriter, 100); // ตั้งค่าความเร็วการพิมพ์ตรงนี้ค่ะ
            }
        }
        typeWriter();
    }

    // เรียกฟังก์ชันดึงข้อมูลดวงดาวจาก GitHub
    fetchGitHubStars();
});

// ฟังก์ชันดึงจำนวน Star จาก GitHub API
async function fetchGitHubStars() {
    const githubUsername = "YOUR-USERNAME"; // เปลี่ยนเป็นชื่อ GitHub ของคุณชนาภาค่ะ
    const repos = ['weather-app', 'ecommerce-api', 'smart-home']; 

    for (const repo of repos) {
        try {
            const response = await fetch(`https://api.github.com/repos/${githubUsername}/${repo}`);
            if (response.ok) {
                const data = await response.json();
                const starCount = data.stargazers_count;

                // โชว์ยอดดาวถ้ามีคนมากดให้ค่ะ
                if (starCount > 0) {
                    updateProjectStarUI(repo, starCount);
                }
            }
        } catch (error) {
            console.error("เกิดข้อผิดพลาดในการดึงข้อมูลค่ะ:", error);
        }
    }
}

function updateProjectStarUI(repoName, stars) {
    const projectLink = document.querySelector(`a[href*="${repoName}"]`);
    if (projectLink) {
        const card = projectLink.closest('.project-card');
        const techStackContainer = card.querySelector('.tech-stack');

        if (techStackContainer) {
            const starTag = document.createElement('span');
            starTag.style.backgroundColor = '#fff8c5';
            starTag.style.color = '#9a6700';
            starTag.style.border = '1px solid rgba(212,167,44,0.3)';
            starTag.innerHTML = `⭐ ${stars} Stars`;
            techStackContainer.appendChild(starTag);
        }
    }
}
