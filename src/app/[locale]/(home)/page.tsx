import { getStaticParams } from '@/locales/server'
import { setStaticParamsLocale } from 'next-international/server'

export default function Page({ params: { locale } }: { params: { locale: string } }) {
  setStaticParamsLocale(locale)

  return <></>
}

export function generateStaticParams() {
  return getStaticParams()
}
