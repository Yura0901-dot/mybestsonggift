import { FileText, Music, Mail, Clock, Sparkles, ShieldCheck } from "lucide-react";

interface Step {
  id: number;
  icon: any;
  title: string;
  desc: string;
  detail: string;
}

interface Feature {
  icon: any;
  title: string;
  desc: string;
}

export const getSteps = (t: any): Step[] => [
  {
    id: 1,
    icon: FileText,
    title: t('step1_title'),
    desc: t('step1_desc'),
    detail: t('step1_detail')
  },
  {
    id: 2,
    icon: Music,
    title: t('step2_title'),
    desc: t('step2_desc'),
    detail: t('step2_detail')
  },
  {
    id: 3,
    icon: Mail,
    title: t('step3_title'),
    desc: t('step3_desc'),
    detail: t('step3_detail')
  }
]

export const getFeatures = (t: any): Feature[] => [
  { icon: Clock, title: t('feat1_title'), desc: t('feat1_desc') },
  { icon: Sparkles, title: t('feat2_title'), desc: t('feat2_desc') },
  { icon: ShieldCheck, title: t('feat3_title'), desc: t('feat3_desc') },
]