import Header from '@components/Header';
import Footer from '@components/Footer';
import { ClinicImage } from '@components/ClinicImage';
import { DoctorIntro } from '@components/DoctorIntro';

import { doctors } from 'data/doctors';

export default function Home() {
  return (
    <div className="container">
      <Header title="अनामया आयुर्वेद मल्टि-स्पेश्यालिटि क्लिनिक" />
      <ClinicImage />

      <main>
        {doctors.map(doctor => (
          <DoctorIntro key={doctor.name} {...doctor} />
        ))}
        <DoctorIntro />
      </main>
      <Footer />
    </div>
  );
}
