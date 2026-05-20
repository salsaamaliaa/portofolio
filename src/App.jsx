import { useEffect, useState } from 'react'
import './App.css'

const SKILLS = [
  { name: 'HTML',       pct: 90 },
  { name: 'CSS',        pct: 90 },
  { name: 'JavaScript', pct: 80 },
  { name: 'PHP',        pct: 85 },
  { name: 'Laravel',    pct: 80 },
  { name: 'ReactJS',    pct: 80 },
  { name: 'Flutter',    pct: 80 },
  { name: 'API',        pct: 70 },
]

const EDUCATION = [
  {
    level: 'Sekolah Dasar',
    school: 'SDIT AL UMMAH',
    year: 'Lulus 2021',
    desc: 'Masa awal belajar dengan fondasi kuat, penuh semangat dan rasa ingin tahu.',
    img: 'sd.png',        
    icon: 'bx bx-book-open',
  },
  {
    level: 'SMP',
    school: 'SMPN 1 CIGOMBONG',
    year: 'Lulus 2024',
    desc: '3 tahun belajar dan aktif di ekskul paduan suara serta tari.',
    img: 'smp.png',     
    icon: 'bx bx-buildings',
  },
  {
    level: 'SMK',
    school: 'SMK WIKRAMA BOGOR',
    year: 'Sedang Berjalan',
    desc: 'Kelas 11, jurusan PPLG. Belajar coding, algoritma, dan desain.',
    img: 'smk.png',        
    icon: 'bx bx-laptop',
  },
]

const CERTIFICATES = [
  {
    title: 'Sertifikat K3LH',
    sub: 'Keselamatan & Kesehatan Kerja — ILO · Agustus 2024',
    img: 'K3.png',     
    icon: 'bx bx-shield-check',
  },
  {
    title: 'Belajar Dasar Pemrograman Web',
    sub: 'Dicoding · November 2024',
    img: 'web.png',     
    icon: 'bx bx-code-block',
  },
  {
    title: 'Belajar Dasar Pemrograman JavaScript',
    sub: 'Dicoding · Januari 2025',
    img: 'Js.png',      
    icon: 'bx bx-code-alt',
  },
  {
    title: 'Sertifikat LDKS',
    sub: 'Latihan Dasar Kepemimpinan — SMK Wikrama · Sep 2024',
    img: 'sertifikat ldks Salsa Amalia Rizkya.png',  
    icon: 'bx bx-star',
  },
  {
    title: 'IGDX Career Seminar',
    sub: 'Game Developer Career — Kominfo · Desember 2024',
    img: 'igdx.png',      
    icon: 'bx bx-joystick',
  },
  {
    title: 'UX Writing Introduction',
    sub: 'MySkill Short Class UI/UX · Agustus 2025',
    img: 'ux.png',      
    icon: 'bx bx-pencil',
  },
  {
    title: 'Data Analysis Fundamental',
    sub: 'MySkill Short Class Data Science · Agustus 2025',
    img: 'dataAnalist.png',
    icon: 'bx bx-bar-chart-alt-2',
  },
]

const PROJECTS = [
  {
    title: 'Project TIXID',
    desc: 'Web app untuk manajemen tiket event dengan fitur pemesanan, QR code, dan dashboard admin.',
    img: 'p.tixid.png',
    icon: 'bx bx-book',
    tags: ['Laravel', 'PHP', 'MySQL'],
    link: 'https://github.com/salsaamaliaa/TIX-ID',
    linkLabel: 'GitHub',
    linkIcon: 'bx bxl-github',
  },
  {
    title: 'Desain UI Makanan',
    desc: 'Desain UI Makanan dengan konsep modern dan warna cerah untuk aplikasi delivery makanan.',
    img: 'p.figma.png',
    icon: 'bx bx-library',
    tags: ['Figma'],
    link: 'https://www.figma.com/design/bl3LBrWyzigaQAXGTQdO8H/Untitled?node-id=0-1&m=dev&t=YuPYOT0glteGOpWH-1',
    linkLabel: 'Figma',
    linkIcon: 'bx bxl-figma',
  },
  {
    title: 'Article Online',
    desc: 'Sistem Article Online dengan fitur CRUD dan autentikasi pengguna.',
    img: 'p.article_online.png',
    icon: 'bx bx-money',
    tags: ['Laravel', 'PHP', 'MySQL'],
    link: 'https://github.com/salsaamaliaa/Proejct_Mandiri_Laravel',
    linkLabel: 'GitHub',
    linkIcon: 'bx bxl-github',
  },
  {
    title: 'Platzi Store',
    desc: 'E-commerce sederhana untuk belajar konsep keranjang belanja, checkout, dan manajemen produk.',
    img: 'p.platzi.png',
    icon: 'bx bx-store',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/salsaamaliaa/platzi-store.git',
    linkLabel: 'GitHub',
    linkIcon: 'bx bxl-github',
  },
  {
    title: 'Profile Diri',
    desc: 'Aplikasi profile diri dengan fitur edit profil, upload foto, dan tampilan responsif.',
    img: 'p.profile.png',
    icon: 'bx bx-user-check',
    tags: ['Flutter', 'Dart'],
    link: 'https://github.com/salsaamaliaa/Profile-Diri.git',
    linkLabel: 'GitHub',
    linkIcon: 'bx bxl-github',
  },
  {
    title: 'UI/UX Aspirasi Siswa',
    desc: '',
    img: 'p.figmaA.png',
    icon: 'bx bx-credit-card',
    tags: ['Figma'],
    link: 'https://www.figma.com/design/nEgfBjq4DGM6kJGv86P1QT/HearMeOut---Aspirasi-Siswa?node-id=122-115&t=0k6C1Paa71P4EOiy-1',
    linkLabel: 'Figma',
    linkIcon: 'bx bxl-figma',
  },
  {
    title: 'Website Portfolio',
    desc: 'Website portfolio pribadi yang menampilkan pendidikan, sertifikat, dan proyek dengan desain elegan.',
    img: 'p.porto.png',
    icon: 'bx bx-user',
    tags: ['ReactJS', 'CSS'],
    link: 'https://github.com/salsaamaliarizkya',
    linkLabel: 'GitHub',
    linkIcon: 'bx bxl-github',
  },
  {
    title: 'Aplikasi Court Booking',
    desc: 'Aplikasi mobile untuk pemesanan lapangan futsal dengan fitur jadwal, pembayaran, dan notifikasi.',
    img: 'p.courtBooking.png',
    icon: 'bx bx-notepad',
    tags: ['Flutter', 'Dart'],
    link: 'https://github.com/salsaamaliaa/court_booking_flutter.git',
    linkLabel: 'GitHub',
    linkIcon: 'bx bxl-github',
  },
  {
    title: 'Book Store',
    desc: 'Aplikasi web untuk toko buku dengan fitur katalog, keranjang belanja, dan sistem pembayaran.',
    img: 'p.reactbook.png',
    icon: 'bx bx-server',
    tags: ['React', 'API'],
    link: 'https://github.com/salsaamaliaa/book-store.git',
    linkLabel: 'GitHub',
    linkIcon: 'bx bxl-github',
  },
]

function ImgWithFallback({ src, alt, className, fallbackIcon, placeholderClass }) {
  const [error, setError] = useState(false)
  useEffect(() => { setError(false) }, [src])
  if (!src || error) {
    return <div className={placeholderClass}><i className={fallbackIcon} /></div>
  }
  return <img src={src} alt={alt} className={className} onError={() => setError(true)} />
}


function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) }
      }),
      { threshold: 0.12 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

function useSkillsAnimate() {
  useEffect(() => {
    const fills = document.querySelectorAll('.skill-fill')
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.style.width = e.target.dataset.pct; obs.unobserve(e.target) }
      }),
      { threshold: 0.3 }
    )
    fills.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}


function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <a href="#HOME" className="nav-logo">SAR.</a>
      <ul className={`nav-links${open ? ' open' : ''}`}>
        {['HOME','ABOUT','EDUCATION','PORTFOLIO','PROJECTS','CONTACT'].map(l => (
          <li key={l}>
            <a href={`#${l}`} onClick={() => setOpen(false)}>
              {l.charAt(0) + l.slice(1).toLowerCase()}
            </a>
          </li>
        ))}
      </ul>
      <button className="nav-toggle" onClick={() => setOpen(o => !o)} aria-label="Menu">
        <span /><span /><span />
      </button>
    </nav>
  )
}


function Hero() {
  return (
    <section id="HOME" className="hero">
      <div className="hero-bg-blob blob-1" />
      <div className="hero-bg-blob blob-2" />
      <div className="hero-bg-blob blob-3" />

      <div className="hero-inner">
        <div className="hero-text">
          <div className="hero-tag">
            <span className="hero-tag-dot" />
            Selamat Datang di Portfolio Saya
          </div>
          <h1 className="hero-heading">
            Hi, Saya <br />
            <span className="gradient-text">Salsa Amalia</span>
            <br />Rizkya
          </h1>
          <p className="hero-sub">
            Siswi SMK Wikrama Bogor jurusan PPLG · 17 tahun · Cigombong
            <br />Passionate in web development, design &amp; problem solving.
          </p>
          <div className="hero-chips">
            <span className="chip chip-pink">HTML &amp; CSS</span>
            <span className="chip chip-blue">JavaScript</span>
            <span className="chip chip-pink">Web Design</span>
            <span className="chip chip-blue">PHP</span>
            <span className="chip chip-pink">ReactJS</span>
            <span className="chip chip-blue">Flutter</span>
          </div>
          <div className="hero-cta">
            <a href="#EDUCATION" className="btn-primary">
              <i className="bx bx-book-reader" /> Lihat Pendidikan
            </a>
            <a href="#CONTACT" className="btn-outline">
              <i className="bx bx-send" /> Hubungi Saya
            </a>
             <a href="/cv-salsa.pdf" download target="_blank" className="btn-outline">
               <i className="bx bx-download" /> Download CV
            </a>
          </div>
        </div>
        <div className="hero-photo-wrap">
          <div className="hero-photo-ring">
            <ImgWithFallback
              src="/foto.png"
              alt="Salsa Amalia Rizkya"
              className="hero-photo"
              fallbackIcon="bx bx-user"
              placeholderClass="hero-photo-placeholder"
            />
            <div className="photo-badge badge-blue">
              <i className="bx bx-code-alt" /> PPLG Student
            </div>
            <div className="photo-badge badge-pink">
              <i className="bx bx-map" /> Bogor, Indonesia
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="ABOUT" className="section section-alt">
      <div className="section-header reveal">
        <span className="section-eyebrow">Tentang Saya</span>
        <h2 className="section-title">Who Am <span className="gradient-text">I?</span></h2>
        <div className="section-line" />
      </div>
      <div className="about-grid">
        <div>
          <div className="about-bio reveal">
            <p>
              Halo! Saya <strong>Salsa Amalia Rizkya</strong>, siswi kelas 11 SMK Wikrama Bogor
              jurusan PPLG (Pengembangan Perangkat Lunak dan Gim). Saya tinggal di Cigombong
              dan memiliki passion besar di dunia <strong>web development</strong>.
            </p>
            <p>
              Sejak SMP saya aktif dalam ekskul paduan suara dan tari, melatih kedisiplinan
              dan kerja tim yang saya bawa juga ke dalam dunia coding. Saya percaya bahwa
              kreativitas dan logika bisa berjalan beriringan.
            </p>
            <p>
              Saat ini saya sedang terus belajar HTML, CSS, JavaScript, PHP, ReactJS, dan Flutter
              untuk membangun aplikasi yang tidak hanya fungsional, tapi juga indah secara visual.
            </p>
          </div>
          <div className="about-info-cards">
            {[
              { label: 'Nama',    value: 'Salsa Amalia Rizkya' },
              { label: 'Usia',    value: '17 Tahun' },
              { label: 'Sekolah', value: 'SMK Wikrama Bogor' },
              { label: 'Jurusan', value: 'PPLG' },
              { label: 'Lokasi',  value: 'Cigombong, Bogor' },
              { label: 'Status',  value: 'Pelajar Aktif' },
            ].map((c, i) => (
              <div className={`info-card reveal reveal-delay-${(i % 3) + 1}`} key={c.label}>
                <div className="info-card-label">{c.label}</div>
                <div className="info-card-value">{c.value}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-wrap reveal">
          <h3>My Skills</h3>
          <div className="skill-list">
            {SKILLS.map(s => (
              <div className="skill-row" key={s.name}>
                <div className="skill-meta">
                  <span>{s.name}</span>
                  <span className="skill-pct">{s.pct}%</span>
                </div>
                <div className="skill-track">
                  <div
                    className="skill-fill"
                    data-pct={`${s.pct}%`}
                    style={{ width: `${s.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


function Education() {
  return (
    <section id="EDUCATION" className="section">
      <div className="section-header reveal">
        <span className="section-eyebrow">Perjalanan Belajar</span>
        <h2 className="section-title">My <span className="gradient-text">Education</span></h2>
        <div className="section-line" />
      </div>
      <div className="edu-grid">
        {EDUCATION.map((e, i) => (
          <div className={`edu-card reveal reveal-delay-${i + 1}`} key={e.school}>
            <div className="edu-img-wrap">
              <ImgWithFallback
                src={`/${e.img}`}
                alt={e.school}
                className="edu-img"
                fallbackIcon={e.icon}
                placeholderClass="edu-img-placeholder"
              />
              <div className="edu-badge-wrap">
                <span className="edu-badge">{e.year}</span>
              </div>
            </div>
            <div className="edu-body">
              <div className="edu-level">{e.level}</div>
              <div className="edu-school">{e.school}</div>
              <p className="edu-desc">{e.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Portfolio() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="PORTFOLIO" className="section section-alt">
      <div className="section-header reveal">
        <span className="section-eyebrow">Pencapaian</span>
        <h2 className="section-title">My <span className="gradient-text">Certificates</span></h2>
        <div className="section-line" />
      </div>

      <div className="port-grid">
        {CERTIFICATES.map((c, i) => (
          <div
            className={`port-card reveal reveal-delay-${(i % 3) + 1}`}
            key={c.title}
            onClick={() => setSelected(c)}
          >
            <div className="port-img-wrap">
              <ImgWithFallback
                src={`/${c.img}`}
                alt={c.title}
                className="port-img"
                fallbackIcon={c.icon}
                placeholderClass="port-img-placeholder"
              />
              <div className="port-overlay">
                <div className="port-overlay-icon"><i className="bx bx-zoom-in" /></div>
              </div>
            </div>
            <div className="port-body">
              <div className="port-title">{c.title}</div>
              <div className="port-sub">{c.sub}</div>
            </div>
          </div>
        ))}
      </div>
      {selected && (
        <div className="cert-modal" onClick={() => setSelected(null)}>
          <div className="cert-modal-box" onClick={e => e.stopPropagation()}>
            <button className="cert-close" onClick={() => setSelected(null)}>
              <i className="bx bx-x" />
            </button>
            <img src={`/${selected.img}`} alt={selected.title} />
            <div className="cert-modal-info">
              <h3>{selected.title}</h3>
              <p>{selected.sub}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

function Project() {
  return (
    <section id="PROJECTS" className="section">
      <div className="section-header reveal">
        <span className="section-eyebrow">Karya Saya</span>
        <h2 className="section-title">Proyek <span className="gradient-text">Pilihan</span></h2>
        <div className="section-line" />
      </div>

      {/* Tombol GitHub Profile */}
      <div className="proj-github-bar reveal">
        <a
          href="https://github.com/salsaamaliaa"
          target="_blank"
          rel="noreferrer"
          className="proj-github-btn"
        >
          <i className="bx bxl-github" />
          github.com/salsaamaliaa
        </a>
      </div>

      <div className="proj-grid">
        {PROJECTS.map((p, i) => (
          <div className={`proj-card reveal reveal-delay-${(i % 3) + 1}`} key={p.title}>
            {/* Gambar / Placeholder */}
            <div className="proj-img-wrap">
              <ImgWithFallback
                src={p.img ? `/${p.img}` : ''}
                alt={p.title}
                className="proj-img"
                fallbackIcon={p.icon}
                placeholderClass="proj-img-placeholder"
              />
            </div>

            {/* Konten */}
            <div className="proj-body">
              <h3 className="proj-title">{p.title}</h3>
              <p className="proj-desc">{p.desc}</p>

              {/* Tag Teknologi */}
              <div className="proj-tags">
                {p.tags.map(tag => (
                  <span className="proj-tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>

            {/* Tombol Link */}
            <a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className={`proj-link-btn ${p.linkLabel === 'Figma' ? 'proj-link-figma' : 'proj-link-github'}`}
            >
              <i className={p.linkIcon} />
              {p.linkLabel}
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}


function Contact() {
  return (
    <section id="CONTACT" className="contact-section">
      <div className="section-header reveal">
        <span className="section-eyebrow">Mari Terhubung</span>
        <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
        <div className="section-line" />
      </div>
      <div className="reveal" style={{ marginTop: '1rem' }}>
        <a href="mailto:shalsajourneyy@gmail.com" className="contact-email">
          shalsajourneyy@gmail.com
        </a>
      </div>
      <div className="socials reveal">
        <a href="https://wa.me/qr/HOWESNTKAKR7G1" target="_blank" rel="noreferrer" className="social-link social-wa">
          <i className="bx bxl-whatsapp" />
        </a>
        <a href="https://www.instagram.com/shlsamlrzkya" target="_blank" rel="noreferrer" className="social-link social-ig">
          <i className="bx bxl-instagram" />
        </a>
        <a href="https://www.linkedin.com/in/salsaamaliarizkya" target="_blank" rel="noreferrer" className="social-link social-li">
          <i className="bx bxl-linkedin" />
        </a>
      </div>
    </section>
  )
}

export default function App() {
  useScrollReveal()
  useSkillsAnimate()
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Portfolio />
      <Project />
      <Contact />
      <footer className="footer">
        <span>© 2025 Salsa Amalia Rizkya. All rights reserved.</span>
      </footer>
    </div>
  )
}