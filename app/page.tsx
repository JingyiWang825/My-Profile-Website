"use client";

import Image from "next/image";
import Link from "next/link";

import Particles from "@/components/Particles";
import Ribbons from "@/components/Ribbons";
import Section from "@/components/Section";
import Timeline from "@/components/Timeline";
import GlassCard from "@/components/GlassCard";
import { content } from "@/lib/content";
import { motion } from "framer-motion";

const anchorLinks = [
  { id: "about", label: "关于我" },
  { id: "inspiration", label: "灵感空间" },
  { id: "achievements", label: "荣耀勋章" },
  { id: "ai-lab", label: "AI 实验室" },
  { id: "cats", label: "我和猫" }
];

export default function HomePage() {

  return (
    <div className="relative min-h-screen bg-snow">
      <div className="pointer-events-none absolute inset-0 bg-snow-gradient" />
      <Particles
        particleColors={["#ffffff"]}
        particleCount={20000}
        particleSpread={14}
        particleBaseSize={160}
        speed={0.08}
        alphaParticles
      />
      <Ribbons colors={["#C9D2E6", "#8B97B4"]} baseThickness={22} />
      <div className="full-bleed top-marquee overflow-hidden">
        <div className="marquee-track">
          <div className="marquee-text">LIVE WITH ILIAD ✦ BE CREATIVE AND PRODUCTIVE WITH ILIAD ✦ LIVE WITH ILIAD ✦ BE CREATIVE AND PRODUCTIVE WITH ILIAD ✦</div>
          <div className="marquee-text">LIVE WITH ILIAD ✦ BE CREATIVE AND PRODUCTIVE WITH ILIAD ✦ LIVE WITH ILIAD ✦ BE CREATIVE AND PRODUCTIVE WITH ILIAD ✦</div>
        </div>
      </div>

      <header className="relative z-20 w-full mt-3">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="text-sm uppercase tracking-[0.25em] text-dusk">Iliad</div>
          <div className="hidden gap-8 text-sm text-ink/70 md:flex">
            {anchorLinks.map((link) => (
              <a key={link.id} href={`#${link.id}`} className="ai-link hover:text-ink">
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main>
        <section className="relative overflow-visible py-24 md:py-32">
          <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 md:flex-row md:items-center">
            <div className="flex-1 space-y-8">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.35em] text-dusk">PURE LOGIC · DIGITAL NARRATIVE</p>
                <h1 className="section-title text-6xl md:text-8xl text-ink">
                  {content.meta.name}
                </h1>
                <h2 className="text-2xl md:text-4xl text-ink/70">{content.meta.title}</h2>
              </div>
              
              <div className="space-y-6">
                <p className="max-w-xl text-base text-ink/70">{content.meta.subtitle}</p>
                <p className="max-w-xl text-lg text-ink/90 leading-relaxed">{content.meta.intro}</p>
              </div>
              
              <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.25em] text-dusk">
                <span className="accent-chip">寂静秩序</span>
                <span className="rounded-full border border-mist px-5 py-2.5 backdrop-blur-sm">AI 叙事</span>
                <span className="rounded-full border border-mist px-5 py-2.5 backdrop-blur-sm">内容驱动</span>
              </div>
            </div>

            <div className="relative flex-1 flex justify-center md:justify-start md:pl-12">
              <div className="relative w-full max-w-sm">
                {/* Floating Quote Bubble */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="glass absolute -left-24 -top-10 z-30 max-w-[200px] rounded-2xl p-4 shadow-2xl"
                >
                  <p className="text-[13px] italic leading-relaxed text-ink/90">
                    "{content.about.summary}"
                  </p>
                </motion.div>

                {/* Avatar Container */}
                <div className="overflow-hidden rounded-[2rem] mist-border bg-gradient-to-b from-mist/20 to-transparent p-1 shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                  <Image
                    src="/assets/images/me-portrait.png"
                    alt="Iliad"
                    width={400}
                    height={480}
                    className="rounded-[1.8rem] object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <Section id="about" eyebrow="SNOW LINES" title={content.about.headline}>
          <div className="space-y-16">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h3 className="section-title text-4xl text-ink">路径与创造</h3>
              <p className="text-lg text-ink/60 font-medium">我以创造确认主体：产品、叙事、以及这间数字屋子。</p>
              <div className="space-y-8 text-base text-ink/70 leading-relaxed">
                {content.about.paragraphs.slice(1).map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>
            
            <div className="pt-8">
              <Timeline items={content.about.timeline} />
            </div>
          </div>
        </Section>

        <Section
          id="inspiration"
          eyebrow="INSPIRATION"
          title={content.inspirations.headline}
          description="用书与演讲构成我认知的坐标。"
        >
          <div className="grid gap-8 md:grid-cols-2">
            {content.inspirations.items.map((item) => (
              <GlassCard key={item.title} className="flex h-full flex-col !p-0 overflow-hidden group">
                {item.image ? (
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-snow via-snow/20 to-transparent" />
                    <div className="absolute bottom-4 left-6">
                      <span className="text-[10px] uppercase tracking-[0.3em] text-ink/60 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                        {item.type}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="pt-8 px-6">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-ink/60 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                      {item.type}
                    </span>
                  </div>
                )}
                
                <div className="p-8 pt-4 flex flex-col flex-1">
                  <h3 className="text-2xl font-semibold text-ink leading-tight">{item.title}</h3>
                  <p className="mt-2 text-sm font-medium text-ink/40 tracking-wide uppercase">{item.subtitle}</p>
                  <p className="mt-6 text-base text-ink/70 leading-relaxed flex-1 italic">
                    “{item.description}”
                  </p>
                  
                  <div className="mt-8 flex items-center gap-6">
                    {item.link ? (
                      <Link 
                        href={item.link} 
                        target="_blank" 
                        rel="noreferrer"
                        className="ai-link text-sm font-medium text-ink/80 hover:text-ink transition-colors"
                      >
                        点击查看
                      </Link>
                    ) : null}
                    {item.secondaryLink ? (
                      <Link 
                        href={item.secondaryLink} 
                        className="ai-link text-sm font-medium text-ink/80 hover:text-ink transition-colors" 
                        target="_blank" 
                        rel="noreferrer"
                      >
                        在线阅读
                      </Link>
                    ) : null}
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </Section>

        <Section
          id="achievements"
          eyebrow="HONORS"
          title={content.achievements.headline}
          description={content.achievements.narrative}
        >
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center">
            <div className="grid gap-8 grid-cols-2">
              {content.achievements.items
                .filter((item) => item.image && !item.title.includes("JLPT N2"))
                .slice(0, 2)
                .map((item) => (
                  <div key={item.title} className="group relative aspect-[3/4] overflow-hidden rounded-2xl mist-border bg-mist/10 shadow-2xl transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(255,255,255,0.05)]">
                    <Image
                      src={item.image as string}
                      alt={(item as any).displayTitle || item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-6">
                      <p className="text-xs text-ink/90 font-medium tracking-widest uppercase">{(item as any).displayTitle || item.title}</p>
                    </div>
                  </div>
                ))}
            </div>
            <GlassCard className="flex flex-col justify-center space-y-8 !p-10">
              <h3 className="section-title text-2xl text-ink">心路历程</h3>
              <p className="text-base text-ink/70 leading-relaxed">
                我更看重考试过程中的秩序感：复盘、迭代、再复盘。证书只是结构化努力的副产品。
              </p>
              <div className="pt-4 flex flex-col gap-6">
                {content.achievements.items
                  .filter((item) => item.link)
                  .map((item) => (
                    <Link
                      key={item.title}
                      href={item.link as string}
                      className="ai-link inline-block text-sm w-fit"
                      target="_blank"
                      rel="noreferrer"
                    >
                      查看 {item.title}
                    </Link>
                  ))}
              </div>
            </GlassCard>
          </div>
        </Section>

        <Section
          id="ai-lab"
          eyebrow="AI LAB"
          title={content.aiLab.headline}
          description={content.aiLab.intro}
        >
          <div className="space-y-12">
            {content.aiLab.projects.map((project) => (
              <GlassCard key={project.title} className="grid gap-8 lg:grid-cols-[1fr_1.3fr] !p-8">
                <div className="space-y-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-dusk font-semibold">SKILL</p>
                    <h3 className="mt-4 text-3xl font-semibold text-ink">{project.title}</h3>
                    <p className="mt-2 text-base text-ink/60">{project.tagline}</p>
                  </div>
                  
                  <p className="text-base text-ink/70 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-3">
                    {project.stack.map((item) => (
                      <span key={item} className="rounded-full border border-mist px-4 py-2 text-xs uppercase tracking-wider text-dusk/80 bg-mist/5">
                        {item}
                      </span>
                    ))}
                  </div>

                  {project.downloadLink && (
                    <div className="pt-4 relative z-50">
                      <a 
                        href={project.downloadLink} 
                        download
                        className="ai-link inline-flex items-center gap-2 rounded-full bg-ink/10 px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-ink/20"
                      >
                        下载 SKILLS 源码
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  {project.video ? (
                    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mist-border shadow-2xl bg-black/20">
                      {project.video.includes('bilibili.com') || project.video.includes('BV') ? (
                        <iframe
                          src={`https://player.bilibili.com/player.html?bvid=${project.video.match(/BV[a-zA-Z0-9]+/)?.[0] || project.video}&page=1&high_quality=1&danmaku=0&autoplay=0&muted=0`}
                          className="absolute inset-0 h-full w-full"
                          scrolling="no"
                          frameBorder="no"
                          allowFullScreen={true}
                        />
                      ) : (
                        <video
                          className="h-full w-full object-cover"
                          src={project.video}
                          controls
                          muted
                          playsInline
                        />
                      )}
                    </div>
                  ) : null}
                  <div className={`grid ${project.media.length === 1 ? "grid-cols-1" : "grid-cols-2"} gap-4`}>
                    {project.media.slice(0, 2).map((asset) => (
                      <div key={asset} className={`relative ${project.media.length === 1 ? "" : "aspect-video"} overflow-hidden rounded-xl mist-border shadow-md`}>
                        <Image 
                          src={asset} 
                          alt={project.title} 
                          width={1200} 
                          height={800} 
                          className="w-full h-auto object-contain" 
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </Section>

        <Section id="cats" eyebrow="COMPANION" title={content.cats.headline} description="日常里的柔软支点。">
          <div className="space-y-12">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              {content.cats.story.map((paragraph, idx) => (
                <p key={idx} className="text-lg text-ink/80 italic">“{paragraph}”</p>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-2xl mx-auto">
              {content.cats.gallery.slice(0, 2).map((item, idx) => (
                <motion.div 
                  key={idx} 
                  whileHover={{ 
                    scale: 1.05, 
                    rotateY: 10, 
                    rotateX: 5,
                    boxShadow: "0 0 25px rgba(229, 152, 155, 0.4)"
                  }}
                  className={`group relative overflow-hidden rounded-2xl border border-transparent hover:border-[#e5989b] transition-all duration-500 perspective-1000 aspect-[3/4] shadow-2xl`}
                >
                  <Image 
                    src={item.image} 
                    alt={item.caption} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0" 
                  />
                  {/* Pioneer Overlay Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-snow/90 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40" />
                  
                  {/* Scanline Effect */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />

                  <div className="absolute inset-0 flex items-end p-6 translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                    <div className="w-full">
                      <div className="h-[1px] w-0 bg-white/40 mb-3 transition-all duration-700 group-hover:w-full" />
                      <span className="text-[10px] tracking-[0.4em] uppercase text-ink/90 font-light block">{item.caption}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>
      </main>

      <footer className="relative z-20 border-t border-mist/60 py-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-3 text-xs uppercase tracking-[0.3em] text-dusk md:flex-row md:items-center md:justify-between">
            <span>叙事与算法的数字共鸣</span>
            <span>© {new Date().getFullYear()} Iliad</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
