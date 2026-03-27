import Image from 'next/image'

export default function HeroAvatar() {
  return (
    <div className="relative h-64 w-64 sm:h-80 sm:w-80 lg:h-96 lg:w-96">
      <div className="absolute inset-0 -m-4">
        <div className="absolute inset-0 rounded-full border border-[#0d2a54] animate-pulse" />
        <div className="absolute inset-2 rounded-full border border-[#1a4a8a]/50" />
      </div>

      <div
        className="absolute inset-0 rounded-full blur-2xl opacity-35"
        style={{ background: 'linear-gradient(135deg, rgba(13,42,84,0.45) 0%, rgba(59,108,181,0.28) 100%)' }}
      />

      <div
        className="relative h-full w-full overflow-hidden rounded-full border-2 border-[#0d2a54] bg-black shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_26px_80px_-30px_rgba(0,0,0,0.85)]"
        aria-label="Foto de Alef Santos"
      >
        <Image
          src="/profile/alef.webp"
          alt="Alef Santos"
          fill
          priority
          sizes="(min-width: 1024px) 24rem, (min-width: 640px) 20rem, 16rem"
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 rounded-full shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08),inset_0_18px_40px_rgba(255,255,255,0.05),inset_0_-24px_38px_rgba(0,0,0,0.24)]" />
      </div>
    </div>
  )
}
