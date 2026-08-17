import { FloatingActions } from "./components/FloatingActions";
import { Hero } from "./components/Hero";
import { LocationSection } from "./components/LocationSection";
import { SectionTitle } from "./components/SectionTitle";
import { SiteFooter } from "./components/SiteFooter";
import { SpeakerCard } from "./components/SpeakerCard";
import { VideoSection } from "./components/VideoSection";
import { WelcomeMessage } from "./components/WelcomeMessage";

const base = "https://hematology-ehc.com/wp-content/uploads/2026";

const speakers = [
  ["Prof. Alok Srivastava","Professor of Medicine (Hematology), Head of Center for Stem Cell Research, CMC Vellore, India",`${base}/04/WhatsApp-Image-2026-04-20-at-9.02.09-AM-1-Photoroom.png`,"🇮🇳"],
  ["Prof. Drew Provan","Emeritus Reader in Autoimmune Haematology, Barts and The London School of Medicine, UK",`${base}/04/Screenshot-2026-04-23-122631-Photoroom-e1776940113533.png`,"🇬🇧"],
  ["Dr. Johnny Mahlangu","Haemophilia Comprehensive Care Centre, University of the Witwatersrand, South Africa",`${base}/04/WhatsApp_Image_2026-04-20_at_1.43.11_PM-removebg-preview.png`,"🇿🇦"],
  ["Prof. Julie Kanter","Professor of Medicine, Hematology and Oncology, University of Alabama at Birmingham",`${base}/03/Untitled-1-768x768.webp`,"🇺🇸"],
  ["Dr. Kofi Anie","Consultant Physician and Psychologist, Imperial College London, UK",`${base}/03/WhatsApp_Image_2026-03-03_at_13.53.40-removebg-preview.webp`,"🇬🇧"],
  ["Prof. Steven Pipe","Director specializing in hemophilia and coagulation disorders, University of Michigan",`${base}/04/WhatsApp_Image_2026-04-07_at_2.59.21_PM-removebg-preview.png`,"🇺🇸"],
  ["Dr. Abdullah Altaffif","Clinical Pharmacist, Qatif Health Network, Eastern Health Cluster",`${base}/03/WhatsApp_Image_2026-03-03_at_13.56.15-removebg-preview.webp`,"🇸🇦"],
  ["Dr. Abdullah Al Zayed","Consultant Adult Hematologist and Internist, Qatif Health Network",`${base}/03/WhatsApp_Image_2026-03-03_at_12.21.09-removebg-preview-e1772614540701.webp`,"🇸🇦"],
  ["Dr. Ahmed Al Saghir","Consultant Adult Hematologist and Medical Oncologist, JHAH, Dhahran",`${base}/03/WhatsApp_Image_2026-03-08_at_10.40.26-removebg-preview-e1772962360600.webp`,"🇸🇦"],
  ["Dr. Ahmed Taher Al Bahrani","Consultant Hematologist, Transfusion Medicine and Stem Cell, KFSH",`${base}/03/WhatsApp_Image_2026-03-08_at_10.41.25-removebg-preview-300x280.webp`,"🇸🇦"],
  ["Dr. Ahmed Khalifa","Healthcare Transformation Leader and Senior Consultant, Ministry of Health",`${base}/04/WhatsApp-Image-2026-04-21-at-12.35.01-PM-Photoroom-214x300.png`,"🇸🇦"],
  ["Prof. Ali Taher","Professor of Medicine, American University of Beirut, Lebanon",`${base}/03/WhatsApp_Image_2026-03-03_at_13.54.30-removebg-preview.webp`,"🇱🇧"],
  ["Dr. Alaa Alzaki","Consultant Adult Hematologist, Internist and Thrombosis Specialist, JHAH",`${base}/04/Screenshot_2026-04-05_115532-removebg-preview-257x300.webp`,"🇸🇦"],
  ["Dr. Ali Sadiq Al-Sahwan","Consultant Adult Cardiologist and Internist, Qatif Health Network",`${base}/03/WhatsApp_Image_2026-03-03_at_12.27.04-removebg-preview.webp`,"🇸🇦"],
  ["Dr. Ashraf Warsi","Consultant Adult Hematologist and Thrombosis Specialist, Jeddah",`${base}/04/WhatsApp_Image_2026-04-20_at_9.09.08_AM-removebg-preview-300x290.png`,"🇸🇦"],
  ["Dr. Diea Awami","Consultant Adult Hematologist and Internist, Eastern Health Cluster",`${base}/03/WhatsApp_Image_2026-03-03_at_12.25.39-removebg-preview-217x300.webp`,"🇸🇦"],
  ["Dr. Diyaa Abdul Rauf Al Gazwi","Consultant Diagnostic Radiologist, Qatif Health Network",`${base}/04/Untitled-removebg-preview-3-216x300.png`,"🇸🇦"],
  ["Dr. Enas Yahya Mutahar","Consultant Adult Hematologist, King Fahad Specialist Hospital",`${base}/04/Screenshot_2026-04-04_152052-removebg-preview.png`,"🇸🇦"],
  ["Dr. Esra Muhimid","Consultant Pediatric Hematologist Oncologist, Qatif Health Network",`${base}/04/Screenshot_2026-04-05_115018-removebg-preview-e1776261225377-179x300.webp`,"🇸🇦"],
  ["Dr. Fatimah Alghanim","Consultant in Transfusion Medicine, Qatif Health Network",`${base}/03/WhatsApp_Image_2026-03-03_at_12.21.33-removebg-preview-288x300.webp`,"🇸🇦"],
  ["Ms. Fatimah Alsoqeah","Clinical Nutrition, Prince Sultan Bin Abdulaziz Humanitarian City",`${base}/03/Layer-2-e1777446496946-291x300.webp`,"🇸🇦"],
  ["Dr. Ghadeer Emsaad","Consultant Adult Endocrinologist and Internist, Anak General Hospital",`${base}/03/WhatsApp_Image_2026-03-03_at_12.24.54-removebg-preview-238x300.webp`,"🇸🇦"],
  ["Dr. Hana Al Julaih","Consultant Pediatric Hematology Oncology, Qatif Health Network","/media/hana-al-julaih.webp","🇸🇦"],
  ["Dr. Hanan Altanbal","Consultant Adult Hematologist and Internist, Qatif Health Network",`${base}/03/WhatsApp_Image_2026-03-03_at_12.26.07-removebg-preview-e1777446441267.webp`,"🇸🇦"],
  ["Dr. Hassan Alkhalifah","Consultant Adult Hematologist, Head of Day Care Unit, Qatif",`${base}/03/WhatsApp_Image_2026-03-03_at_12.22.30-removebg-preview-e1777381333740-249x300.webp`,"🇸🇦"],
  ["Prof. Dr. Hatoon Ezzat","Professor of Hematology, Ministry of Health, Riyadh",`${base}/04/Screenshot_2026-04-04_151943-removebg-preview-1-261x300.png`,"🇸🇦"],
  ["Dr. Hazzaa Abdullah Alzahrani","Consultant Adult Hematologist, Stem Cell Transplantation, KFSHRC",`${base}/03/Screenshot_2026-03-25_102121-removebg-preview-1-300x300.png`,"🇸🇦"],
  ["Dr. Hussain Al Saeed","Consultant Adult Hematologist and Internist, Almana Hospitals","/media/hussain-al-saeed.webp","🇸🇦"],
  ["Dr. Jihad Abdullah Alsihati","Consultant Gastroenterologist and Internist, Qatif Health Network",`${base}/03/Screenshot_2026-03-25_102546-removebg-preview-1-222x300.png`,"🇸🇦"],
  ["Prof. Khaled Musallam","Group Chief Research Officer, Burjeel Holdings, Abu Dhabi",`${base}/04/WhatsApp-Image-2026-04-19-at-4.27.48-PM-Photoroom-e1776680947856-300x228.png`,"🇦🇪"],
  ["Dr. Majed Al-Batran","Associate Consultant in Adult Hematology, King Fahad Specialist Hospital",`${base}/03/WhatsApp_Image_2026-03-03_at_12.26.39-removebg-preview.webp`,"🇸🇦"],
  ["Dr. Mohammed Abdullah Alzahir","Cardiac Imaging Consultant, Qatif Health Network",`${base}/04/Screenshot_2026-04-04_151907-removebg-preview.png`,"🇸🇦"],
  ["Dr. Mohammad Alshahrani","Consultant Pediatric Hematology, Oncology and BMT, Riyadh",`${base}/04/Screenshot-2026-04-28-154325-Photoroom-1-1-768x777.webp`,"🇸🇦"],
  ["Dr. Mohammed Al Darwish","Consultant Pediatric Hematologist Oncologist, Eastern Health Cluster",`${base}/03/WhatsApp_Image_2026-03-03_at_13.04.12-removebg-preview.webp`,"🇸🇦"],
  ["Dr. Mohammed Alzayer","Conference Chairman, Consultant Hematologist, Qatif Health Network",`${base}/03/WhatsApp_Image_2026-03-03_at_12.32.08-removebg-preview.webp`,"🇸🇦"],
  ["Dr. Mohammed Fuad Essa","Consultant Pediatric Hematology-Oncology and Stem Cell Transplantation",`${base}/03/WhatsApp_Image_2026-03-03_at_13.04.55-removebg-preview.webp`,"🇸🇦"],
  ["Dr. Mohsen Alzahrani","Head, Adult Stem Cell Transplant and Cellular Therapy Program, Riyadh",`${base}/03/WhatsApp_Image_2026-03-03_at_12.23.16-removebg-preview.webp`,"🇸🇦"],
  ["Dr. Mona Alfaraj","Consultant Hematopathologist and Transfusionist, Qatif Health Network",`${base}/03/WhatsApp_Image_2026-03-08_at_10.40.55-removebg-preview.webp`,"🇸🇦"],
  ["Dr. Nawal Mohammed","Consultant Hematologist, Hereditary Blood Diseases Center, Al Ahsa",`${base}/04/WhatsApp_Image_2026-04-19_at_15.23.44-removebg-preview.webp`,"🇸🇦"],
  ["Mr. Nazar Alkhadrawi","Physical Therapy, Qatif Health Network, Eastern Health Cluster",`${base}/03/WhatsApp_Image_2026-03-03_at_13.55.37-removebg-preview.webp`,"🇸🇦"],
  ["Dr. Nour Hisham Al-Mozain","Consultant Hematopathologist and Transfusion Medicine, Riyadh",`${base}/04/WhatsApp_Image_2026-04-05_at_11.01.39_AM-removebg-preview.png`,"🇸🇦"],
  ["Dr. Ohoud Fouad Kashari","Consultant Pediatric Hematology Oncology, Jeddah","/media/ohoud-kashari.webp","🇸🇦"],
  ["Dr. Rabab Al Dawood","Consultant Hematopathologist, King Fahad Specialist Hospital",`${base}/04/Screenshot_2026-04-15_144011-removebg-preview.png`,"🇸🇦"],
  ["Dr. Reem Rashid Aldossary","Consultant Obstetrician and Gynecologist, Qatif Health Network",`${base}/04/WhatsApp_Image_2026-04-05_at_11.01.46_AM-removebg-preview-755x1024.webp`,"🇸🇦"],
  ["Dr. Saad Al Daama, MD","Executive Director of Medical and Clinical Administration, KFSH Dammam",`${base}/04/Screenshot-2026-04-23-123751-Photoroom.png`,"🇸🇦"],
  ["Dr. Salah Abohelaika","Consultant Clinical Pharmacist and Head of Research Department",`${base}/03/WhatsApp_Image_2026-03-03_at_12.22.51-removebg-preview-e1772612932799.webp`,"🇸🇦"],
  ["Prof. Salam Salim Al Kindi","Senior Consultant Hematologist, Sultan Qaboos University Hospital",`${base}/03/Screenshot_2026-03-25_101738-removebg-preview-1.png`,"🇴🇲"],
  ["Dr. Saud Abu Harbesh","Internal Medicine and Hematology Oncology Consultant",`${base}/04/cc014f48-7cff-42d6-9363-f2ec1b63ed17-Photoroom.png`,"🇸🇦"],
  ["Dr. Sultan AlMutairi","Consultant Hematology, KAMC National Guard Hospital, Riyadh",`${base}/04/WhatsApp-Image-2026-04-21-at-11.28.57-AM-Photoroom-e1776768794607.png`,"🇸🇦"],
  ["Prof. Tarek Owaida","Director of Pathology and Laboratory Medicine Division, KFSHRC",`${base}/04/Screenshot-2026-04-23-123302-Photoroom.png`,"🇸🇦"],
  ["Dr. Wael Abdullah Alanazi","Consultant Adult Hematologist and Stem Cell Transplantation",`${base}/03/Screenshot_2026-03-25_102839-removebg-preview-1.png`,"🇸🇦"],
  ["Dr. Yamin Abdulmohsen Algheryafi","Consultant Orthopedic Surgeon, Qatif Health Network",`${base}/04/Screenshot_2026-04-05_123511-removebg-preview.png`,"🇸🇦"],
  ["Dr. Zainab Mohammed Alhouri","Consultant Adult Hematologist, Qatif Health Network","/media/zainab-alhouri.webp","🇸🇦"],
  ["Dr. Zainab Essa Almakki","Consultant Pediatric Hematologist Oncologist, Eastern Health Cluster",`${base}/03/WhatsApp_Image_2026-03-03_at_13.53.03-removebg-preview.webp`,"🇸🇦"],
  ["Dr. Zainab Redha Alshaban","Occupational Medicine Consultant, Qatif Health Network",`${base}/03/WhatsApp_Image_2026-03-03_at_12.25.21-removebg-preview.webp`,"🇸🇦"],
] as const;

const flagIcons: Record<string,string> = {
  "🇮🇳":"/media/flag-in.png","🇬🇧":"/media/flag-gb.png","🇿🇦":"/media/flag-za.png","🇺🇸":"/media/flag-us.png",
  "🇸🇦":"/media/flag-sa.png","🇱🇧":"/media/flag-lb.png","🇦🇪":"/media/flag-ae.png","🇴🇲":"/media/flag-om.png",
};

const audience = ["Hematology","Blood Transfusion Medicine","Pathology","Laboratory – Hematology","Laboratory","Radiological Technology","Radiotherapy","Social Service","General Surgery","Orthopedic Surgery","Pediatrics","Obstetrics and Gynecology","Hematological Pathology","Diagnostic Radiology","General Practice","Nursing","Pharmacy","Internal Medicine","Physiotherapy","Clinical Nutrition","Public Health Nutrition","Health Education","Family Medicine"];

export default function Home(){
  return <main>
    <FloatingActions />
    <Hero />
    <VideoSection />

    <WelcomeMessage
      id="committee"
      image={`${base}/04/Dr.-Abdulaziz.png`}
      imageAlt="Dr. Abdulaziz Alghamdi"
      photoTone="red"
      heading={<>Dr. Abdulaziz Alghamdi<span>CEO of Eastern Health Cluster</span></>}
    >
      <span className="mini-title">Dear Colleagues,</span><p>It is our great pleasure to welcome you to the Second International Hematology and Hemostasis Conference, which will be held from May 3rd through May 5th, 2026.</p><p>The Eastern province of the Kingdom of Saudi Arabia exhibits a high prevalence of hematological disorders, particularly hereditary blood diseases such as sickle cell disease, with a prevalence of 3% according to the Ministry of Health 2024 census. In Saudi Arabia, management has improved significantly with the development of specialized hematology units at Qatif Central Hospital, Prince Mohamed Bin Fahad Hospital for Hematological Disorders, and other Eastern Health Cluster (EHC) facilities, which provide comprehensive hematological care, from diagnostic services to advanced treatment protocols.</p><p>At the Eastern Health Cluster, we continue to advance our national initiatives, including the Saudi Model of Care, as the cornerstone of the transformation of the healthcare system, providing a comprehensive system that supports individuals in managing their chronic conditions by providing integrated healthcare services and facilitating patient transitions between various care facilities within the Eastern Health Cluster, alongside enhancing the level of services with advanced therapies (such as bone marrow transplantation and gene therapy), and addressing the psychosocial impacts of chronic hematological conditions.</p><p>The Second International Hematology and Hemostasis Conference, covering topics from basic sickle cell pain management to innovative gene therapy, reflects the Eastern Health Cluster&apos;s support for healthcare providers managing hematological diseases effectively and efficiently. The contributions of local, regional, and international speakers will strengthen healthcare providers&apos; awareness and approaches to understanding, diagnosing, and managing hematological and hemostatic diseases, improving the quality of life for patients, families, and the community.</p><p>I hope that you enjoy this three-day conference, and I look forward to cordially welcoming you on May 3rd, 2026.</p>
    </WelcomeMessage>

    <WelcomeMessage
      variant="president"
      image="/media/hana-al-julaih.webp"
      imageAlt="Dr. Hana Al Julaih"
      photoTone="dark"
      heading="Dr. Hana Al Julaih – Head of Scientific Committee"
      details={<p>Consultant Pediatrician, Pediatric Hematology Oncology – Hemoglobinopathy<br />Qatif Health Network</p>}
    >
      <h2>President&apos;s Welcome Message</h2><p>Welcome everyone to the Eastern Province, a land adorned with the beauty of the sea and the grace of swaying palms, a place where peace and rapport flourish.</p><p>We thank Dr. Abdulaziz AlGhamdi, CEO of Eastern Health Cluster, for his support and also Qatif Health Network. Also, we extend a warm and heartfelt welcome to each and every one of you.</p><p>Thank you for gracing us with your presence and joining us at the Second International Hematology &amp; Hemostasis Conference. Over three days, we are privileged to host a distinguished group of shining speakers and pioneers in the field of Hematology.</p><p>Our primary goal is to broaden our thinking and enhance our understanding of hematology cases. We aim to develop a heightened sense of a high index of suspicion, enabling us to provide the best possible care for our patients.</p><p>Throughout this event, we will be showcasing the latest advances in hematology services. We will engage in insightful discussions on emergency management and novel therapies for prevalent conditions including Sickle Cell Disease, Thalassemia, and hemostatic disorders. Additionally, we will have the opportunity to share intriguing clinical cases and participate in workshops where we can deepen our knowledge of laboratory and radiological tests interpretation.</p><p>With great anticipation, we hope that this meeting will be a fruitful and enriching experience for all. May it be filled with joy, excitement, and abundant opportunities for learning and professional growth.</p><p>Once again, we extend our warmest welcome to everyone present. We look forward to a memorable and successful event together.</p>
    </WelcomeMessage>

    <section className="learning wrap" id="agenda">
      <SectionTitle title="Learning Objectives" variant="learning" />
      <div className="learn-grid">
        {[["01","Identify the role of Gene therapy in inherited blood disorders."],["02","Explore advances in the diagnosis and management of inherited and acquired bleeding disorders."],["03","Examine the challenges and evolving landscape of hemoglobinopathy management."],["04","Evaluate the outcomes and identify key prognostic factors of allogeneic hematopoietic stem cell transplantation (HSCT) hemoglobinopathy in the Saudi Arabian population."]].map(x=><div key={x[0]}><b>{x[0]}</b><p>{x[1]}</p></div>)}
      </div>
    </section>
    <div className="red-divider" />

    <section className="target wrap">
      <SectionTitle title="Target Audience" variant="target" />
      <div className="target-layout"><div className="audience-list"><div>{audience.slice(0,12).map(x=><span key={x}><i aria-hidden="true">♡</i>{x}</span>)}</div><div>{audience.slice(12).map(x=><span key={x}><i aria-hidden="true">♡</i>{x}</span>)}</div></div><div className="blood-mark" aria-hidden="true"><span/><span/><i/></div></div>
    </section>

    <section className="speakers wrap" id="speakers">
      <SectionTitle title="Speakers" variant="speakers" />
      <p className="speakers-intro">A distinguished group of national and international experts will share practical insights, clinical experience, and the latest scientific advances in the field.</p>
      <div className="speaker-list">{speakers.map(([name,role,image,flag])=><SpeakerCard name={name} role={role} image={image} flagIcon={flagIcons[flag]} key={name} />)}</div>
    </section>

    <LocationSection />

    <SiteFooter />
  </main>
}
