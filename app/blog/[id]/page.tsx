"use client";

import { useQuery } from "@apollo/client";
import { QUERY_BLOG_DETAIL } from "@/app/utilities/queries/QueryBlogDeatil";
import style from "../../styles/components/BlogDetail.module.scss";

export default function BlogDetail({ params }: { params: any }): JSX.Element {
  const id = params.id;
  const { data, loading } = useQuery(QUERY_BLOG_DETAIL, {
    variables: { id: id },
  });

  if (loading) {
    return <div>Loading...</div>;
  } else console.log(data);
  return (
    <div className={style.blogDetail}>
      <div className={style.blogDetail__container}>
        <div className={style.blogDetail__classification}>Annoucement</div>
        <div className={style.blogDetail__dot}></div>
        <div className={style.blogDetail__date}>19 September 2023</div>
      </div>
      <div className={style.blogDetail__container}>
        <div className={style.blogDetail__title}>
          Neuralink’s First-in-Human Clinical Trial is Open for Recruitment
        </div>
      </div>
      <div className={style.blogDetail__container}>
        <div className={style.blogDetail__content}>
          We are happy to announce that we’ve received approval from the
          reviewing independent institutional review board and our first
          hospital site to begin recruitment for our first-in-human clinical
          trial. The PRIME Study (short for Precise Robotically Implanted
          Brain-Computer Interface) – a groundbreaking investigational medical
          device trial for our fully-implantable, wireless brain-computer
          interface (BCI) – aims to evaluate the safety of our implant (N1) and
          surgical robot (R1) and assess the initial functionality of our BCI
          for enabling people with paralysis to control external devices with
          their thoughts. During the study, the R1 Robot will be used to
          surgically place the N1 Implant’s ultra-fine and flexible threads in a
          region of the brain that controls movement intention. Once in place,
          the N1 Implant is cosmetically invisible and is intended to record and
          transmit brain signals wirelessly to an app that decodes movement
          intention. The initial goal of our BCI is to grant people the ability
          to control a computer cursor or keyboard using their thoughts alone.
          The PRIME Study is being conducted under the investigational device
          exemption (IDE) awarded by the FDA in May 2023 and represents an
          important step in our mission to create a generalized brain interface
          to restore autonomy to those with unmet medical needs. Those who have
          quadriplegia due to cervical spinal cord injury or amyotrophic lateral
          sclerosis (ALS) may qualify. If you’re interested in learning whether
          you may qualify for current and future Neuralink clinical trials,
          consider joining our Patient Registry.
        </div>
      </div>
    </div>
  );
}
