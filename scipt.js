// รอให้หน้าเว็บโหลดโครงสร้างเสร็จเรียบร้อยก่อนทำงาน
document.addEventListener('DOMContentLoaded', () => {
    
    const searchInput = document.getElementById('searchInput');
    const projectCards = document.querySelectorAll('.project-card');

    // ตรวจจับเหตุการณ์เมื่อคุณชนาภาหรือผู้เยี่ยมชมพิมพ์ข้อความในช่องค้นหา
    searchInput.addEventListener('input', (e) => {
        const searchText = e.target.value.toLowerCase().trim();

        projectCards.forEach(card => {
            // ดึงข้อความจากหัวข้อ รายละเอียด และแท็กของแต่ละโปรเจกต์
            const title = card.querySelector('h3').textContent.toLowerCase();
            const description = card.querySelector('p').textContent.toLowerCase();
            
            // ดึงข้อมูลแท็กทั้งหมดในตัวการ์ดมารวมกัน
            const tags = Array.from(card.querySelectorAll('.tag'))
                              .map(tag => tag.textContent.toLowerCase())
                              .join(' ');

            // ตรวจสอบว่าคำที่พิมพ์ ตรงกับส่วนใดส่วนหนึ่งในคาร์ดหรือไม่
            if (title.includes(searchText) || description.includes(searchText) || tags.includes(searchText)) {
                // ถ้าตรง ให้แสดงการ์ดตามปกติ
                card.style.display = 'flex';
                card.style.opacity = '1';
            } else {
                // ถ้าไม่ตรง ให้ซ่อนการ์ดนั้นไปค่ะ
                card.style.display = 'none';
                card.style.opacity = '0';
            }
        });
    });
    
    // ลูกเล่นเพิ่มเติม: คอนโซลต้อนรับเล็กๆ สำหรับนักพัฒนาที่เปิด Inspect ดูโค้ดคุณชนาภา
    console.log("👋 ยินดีต้อนรับสู่คลังโค้ดของคุณชนาภาค่ะ!");
});
