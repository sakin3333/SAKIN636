* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
body {
    background-color: #0b071e;
    color: #ffffff;
    overflow-x: hidden;
}
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 5%;
    background: rgba(11, 7, 30, 0.8);
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
    border-bottom: 1px solid rgba(0, 242, 254, 0.2);
}
.logo {
    font-size: 24px;
    font-weight: bold;
    color: #fff;
}
.logo span { color: #00f2fe; }
.nav-links {
    display: flex;
    list-style: none;
}
.nav-links li { margin-left: 20px; }
.nav-links a {
    color: #fff;
    text-decoration: none;
    transition: 0.3s;
}
.nav-links a:hover { color: #00f2fe; }
.hero-section {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: radial-gradient(circle, rgba(11,7,30,1) 0%, rgba(5,3,15,1) 100%);
    padding: 0 20px;
}
.hero-content h1 {
    font-size: 3rem;
    background: linear-gradient(45deg, #00f2fe, #4facfe);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.bengali-text {
    color: #a097c4;
    font-size: 1.2rem;
    margin-top: 10px;
}
.stats-container {
    display: flex;
    justify-content: center;
    gap: 40px;
    margin: 30px 0;
}
.stat-box h3 {
    font-size: 2.5rem;
    color: #00f2fe;
    text-shadow: 0 0 10px rgba(0,242,254,0.5);
}
.cta-btn {
    display: inline-block;
    padding: 15px 30px;
    background: linear-gradient(45deg, #00f2fe, #4facfe);
    color: #0b071e;
    font-weight: bold;
    text-decoration: none;
    border-radius: 30px;
    box-shadow: 0 0 20px rgba(0,242,254,0.4);
    transition: 0.3s;
}
.cta-btn:hover { transform: scale(1.05); }
.services-section, .portfolio-section, .contact-section {
    padding: 80px 5%;
    text-align: center;
}
.services-grid, .portfolio-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    margin-top: 40px;
}
.service-card, .portfolio-card {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(0, 242, 254, 0.1);
    padding: 30px;
    border-radius: 15px;
    width: 300px;
    transition: 0.3s;
}
.service-card:hover, .portfolio-card:hover {
    border-color: #00f2fe;
    transform: translateY(-5px);
}
.service-card i {
    font-size: 3rem;
    color: #00f2fe;
    margin-bottom: 15px;
}
.graph-placeholder {
    margin-top: 15px;
    text-align: left;
}
.bar-chart {
    background: rgba(255,255,255,0.1);
    border-radius: 5px;
    display: block;
    height: 10px;
    margin-top: 8px;
    overflow: hidden;
    width: 100%;
}
.bar-chart span {
    background: #00f2fe;
    display: block;
    height: 100%;
}
.secure-form {
    max-width: 500px;
    margin: 40px auto;
    display: flex;
    flex-direction: column;
    gap: 15px;
}
.secure-form input, .secure-form textarea {
    padding: 15px;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(0,242,254,0.2);
    color: #fff;
    border-radius: 8px;
}
.submit-btn {
    padding: 15px;
    background: #00f2fe;
    border: none;
    color: #0b071e;
    font-weight: bold;
    border-radius: 8px;
    cursor: pointer;
}
.social-links {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    gap: 20px;
}
.social-icon {
    font-size: 1.5rem;
    color: #fff;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255,255,255,0.05);
    text-decoration: none;
    transition: 0.3s;
}
.social-icon:hover { background: #00f2fe; color: #0b071e; }
.footer-note { margin-top: 20px; color: #a097c4; font-size: 12px; }

/* Gemini Floating Widget */
.gemini-widget {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 10000;
}
.gemini-icon {
    background: linear-gradient(135deg, #1a73e8, #7015b3);
    padding: 12px 20px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(0,0,0,0.3);
}
.gemini-icon img { width: 24px; }
.gemini-chat-box {
    display: none;
    position: fixed;
    bottom: 80px;
    right: 20px;
    width: 320px;
    background: #131124;
    border: 1px solid #7015b3;
    border-radius: 12px;
    box-shadow: 0 5px 25px rgba(0,0,0,0.5);
    overflow: hidden;
}
.chat-header {
    background: linear-gradient(135deg, #1a73e8, #7015b3);
    padding: 15px;
    display: flex;
    justify-content: space-between;
}
.chat-body { padding: 15px; height: 200px; overflow-y: auto; font-size: 14px; }
.chat-footer { display: flex; padding: 10px; border-top: 1px solid rgba(255,255,255,0.1); }
.chat-footer input { flex: 1; padding: 8px; background: #201d36; border: none; color: #fff; border-radius: 4px; }
.chat-footer button { background: none; border: none; color: #00f2fe; margin-left: 10px; cursor: pointer; }
