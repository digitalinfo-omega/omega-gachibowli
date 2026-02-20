import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  PhoneCall,
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white grow">
      <section className="pt-[50px] max-w-10xl mx-auto px-5 sm:px-6 bg-[#fff]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <div>
              <img
                src="/images/logo.webp"
                alt="Leadership"
                loading="lazy"
                width="195"
                height="81"
                decoding="async"
                className=""
              />
            </div>
            <div>
              <ul className="flex gap-6 mt-6">
                <li className="bg-[#ddf6f8] p-2.5 rounded-full">
                  <Link
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#299fb0] hover:opacity-80 transition-opacity"
                  >
                    <Youtube size={24} />
                  </Link>
                </li>
                <li className="bg-[#ddf6f8] p-2.5 rounded-full">
                  <Link
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#299fb0] transition-colors"
                  >
                    <Instagram size={24} />
                  </Link>
                </li>
                <li className="bg-[#ddf6f8] p-2.5 rounded-full">
                  <Link
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#299fb0] transition-colors"
                  >
                    <Facebook size={24} />
                  </Link>
                </li>
                <li className="bg-[#ddf6f8] p-2.5 rounded-full">
                  <Link
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#299fb0] transition-colors"
                  >
                    <Linkedin size={24} />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-6">
              <div className="flex items-center gap-4">
                <Link
                  href=""
                  className="text-[#299fb0] p-2.5 hover:opacity-80 transition-opacity bg-[#e9f4f5] rounded-full"
                >
                  <Mail size={24} />
                </Link>
                <p className="info-section text-base font-normal leading-loose text-[#000] m-0">
                  Mail: info@omegahospitals.com
                </p>
              </div>
            </div>
            <div className="mt-[10px]">
              <div className="flex items-center gap-4">
                <Link
                  href=""
                  className="text-[#299fb0] p-2.5 hover:opacity-80 transition-opacity bg-[#e9f4f5] rounded-full"
                >
                  <Phone size={24} />
                </Link>
                <p className="info-section text-base font-normal leading-loose text-[#000] m-0">
                  Phone: 08773501609
                </p>
              </div>
            </div>
            <div className="mt-[10px]">
              <div className="flex gap-4 items-start">
                <span className="flex-shrink-0 self-center w-[45px] h-[45px] bg-[#e9f4f5] rounded-full flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="text-[#299fb0]"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg>
                </span>
                <div>
                  <span className="text-base font-normal block">
                    Gachibowli
                  </span>
                  <p className="text-base font-normal leading-6 mt-1 m-0">
                    CHR Lane, Rd Number 1, Seven Hills Colony,
                    <br />
                    Gachibowli, Hyderabad, Telangana 500032
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div>
                <div>
                  <Link
                    className="no-decoration block"
                    target="_blank"
                    rel="noopener noreferrer"
                    href=""
                  >
                    <img
                      alt="playstore"
                      loading="lazy"
                      width="180"
                      height="59"
                      decoding="async"
                      className="w-full sm:w-auto"
                      src="/images/playstore.jpg"
                    />
                  </Link>
                </div>
                <div className="pt-2">
                  <Link
                    className="no-decoration block"
                    target="_blank"
                    rel="noopener noreferrer"
                    href=""
                  >
                    <img
                      alt="appstore"
                      loading="lazy"
                      width="180"
                      height="59"
                      decoding="async"
                      className="w-full sm:w-auto"
                      src="/images/appstore.jpg"
                    />
                  </Link>
                </div>
              </div>
              <div>
                <img
                  alt="nabh"
                  loading="lazy"
                  width="140"
                  height="140"
                  decoding="async"
                  className="w-full sm:w-auto"
                  src="/images/appointment-image.png"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h2 className="text-[1.25rem] mb-3 font-[600] mt-3 font-omega-typography-text-sm-regular-font-family">
                  Oncology Services
                </h2>
                <ul className="list-none mb-0 pl-0 mt-0 font-omega-typography-text-sm-regular-font-family">
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Surgical Oncology
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Orthopaedic Oncology
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Radiation Oncology
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Neuro Oncology
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Nuclear Medicine &amp; PET-CT
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      PET MRI
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Robotic Radio Surgery
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Medical Oncology
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-[1.25rem] mb-3 font-[600] mt-3 font-omega-typography-text-sm-regular-font-family">
                  Specialties
                </h2>
                <ul className="list-none mb-0 pl-0 mt-0 font-omega-typography-text-sm-regular-font-family">
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Emergency &amp; Trauma
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Cardiology
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Cardio Thoracic
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Neurology
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Neuro Surgery
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Orthopaedics &amp; Joint Replacements
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Nephrology
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Urology
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Gastro
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Pulmonology
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Critical Care Medicine
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Dentistry
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      ENT
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Dermatology
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Breast Clinic
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Lipedema Clinic
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Spine Clinic
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Plastic Surgery
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Surgical Gastroenterology
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Obesity Clinic
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <div>
                  <h2 className="text-[1.25rem] mb-3 font-[600] mt-3 font-omega-typography-text-sm-regular-font-family">
                    Quick Links
                  </h2>
                  <ul className="list-none mb-0 pl-0 mt-0 font-omega-typography-text-sm-regular-font-family">
                    <li>
                      <Link
                        className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                        target="_parent"
                        href=""
                      >
                        Technology
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                        target="_parent"
                        href=""
                      >
                        Facilities
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                        target="_parent"
                        href=""
                      >
                        Blogs
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                        target="_parent"
                        href=""
                      >
                        News and media
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                        target="_parent"
                        href=""
                      >
                        Cafeteria
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                        target="_parent"
                        href=""
                      >
                        Biomedical Waste
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                        target="_parent"
                        href=""
                      >
                        Terms &amp; conditions
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                        target="_parent"
                        href=""
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                        target="_parent"
                        href=""
                      >
                        Cancellation Policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                        target="_parent"
                        href=""
                      >
                        Insurance
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                        target="_parent"
                        href=""
                      >
                        Corporate Empanelment
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                        target="_parent"
                        href=""
                      >
                        In-Patients
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                        target="_parent"
                        href=""
                      >
                        Out Patients
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                        target="_parent"
                        href=""
                      >
                        Our Patients
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                        target="_parent"
                        href=""
                      >
                        Hospital Rooms
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                        target="_parent"
                        href=""
                      >
                        Patient Rooms
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                        target="_parent"
                        href=""
                      >
                        Courses
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                        target="_parent"
                        href=""
                      >
                        Knowledge Center
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                        target="_parent"
                        href=""
                      >
                        Departments
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                        target="_parent"
                        href=""
                      >
                        FAQs
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                        target="_parent"
                        href=""
                      >
                        Gallery
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                        target="_parent"
                        href=""
                      >
                        Patient Testimonials
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <h2 className="text-[1.25rem] mb-3 font-[600] mt-3 font-omega-typography-text-sm-regular-font-family">
                  Cancer
                </h2>
                <ul className="list-none mb-0 pl-0 mt-0 font-omega-typography-text-sm-regular-font-family">
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Breast Cancer
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Brain Cancer
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Cervix Cancer
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Ovarian Cancer
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Anal Cancer
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Liver Cancer
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Colon Cancer
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Endometrial Cancer
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Pancreatic Cancer
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Stomach Cancer
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Skin Cancer
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Prostate Cancer
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Thyroid Cancer
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Testicular Cancer
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Lung Cancer
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Brain Tumour
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Oesophageal Cancer
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Oral Cancer
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href=""
                    >
                      Pancreatic Cancer
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <div className="w-full bg-secondary px-6 py-2">
          <div className="mx-auto flex md:flex-row flex-col md:gap-2 gap-[15px] max-w-7xl items-center justify-between">
            {/* Left: Social */}
            <div className="flex items-center gap-3 text-white">
              <span className="font-semibold">Social Media :</span>

              <a href="#" className="hover:opacity-80 transition">
                <Facebook size={16} />
              </a>

              <a href="#" className="hover:opacity-80 transition">
                <Instagram size={16} />
              </a>

              <a href="#" className="hover:opacity-80 transition">
                <Linkedin size={16} />
              </a>

              <a href="#" className="hover:opacity-80 transition">
                <Youtube size={16} />
              </a>
            </div>

            {/* Right: Emergency */}
            <div className="flex items-center gap-3 text-white">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent">
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <ellipse
                    cx="22"
                    cy="21.9727"
                    rx="22"
                    ry="21.9727"
                    fill="url(#pattern0_991_3124)"
                  />
                  <defs>
                    <pattern
                      id="pattern0_991_3124"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlinkHref="#image0_991_3124"
                        transform="matrix(0.00444444 0 0 0.00444997 0 -0.000621614)"
                      />
                    </pattern>
                    <image
                      id="image0_991_3124"
                      width="225"
                      height="225"
                      preserveAspectRatio="none"
                      xlinkHref="data:image/png;base64,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"
                    />
                  </defs>
                </svg>
              </div>

              <div className="leading-tight">
                <p className="text-xs font-medium uppercase">
                  Daily 24H Emergency
                </p>
                <p className="font-semibold">9849022121</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-[14px] text-center bg-black text-white py-2 font-omega-typography-text-sm-regular-font-family">
          © Copyright 2025 -{" "}
          <Link className="text-white no-underline" href="">
            Omega Hospitals - A Morgan Stanley Enterprise. All Rights Reserved.
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
