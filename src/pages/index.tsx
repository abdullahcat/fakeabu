import 'tailwindcss/tailwind.css';  // adjust path if necessary
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { useState } from 'react';
const HomePage: React.FC = () => {







    return (
        <div>
            <Head>
                <title>ANTALYA BİLİM ÜNİVERSİTESİ</title>
            </Head>
            <section className='text-black pt-[110px] w-full min-h-screen bg-white'>
                <article className="bg-blue-50 mx-5 bg-white   p-3 m-3  border-l-8   border-blue-300    ">
                    <div className='flex flex-row  space-x-4'>
                        <img className='h-[150px] w-full' src="https://i.ibb.co/nL70K1s/IMG-6977.jpg" alt="" />
                        <div className="flex items-center sm:gap-8">


                            <div className='space-y-3'>

                                <p> 230213215 - Sabahattin Efe Yücer</p>
                                <p className='text-sm'>Kimlik No: 10765694390
                                </p>
                                <p className='text-sm'>Akademik Program:</p>
                                <select className='text-sm border border-gray' value={"selectedItem"}  >
                                    <option value="hukuk">Hukuk Fakültesi / Hukuk / Hukuk</option>
                                </select>

                                <p className='text-sm'>Akademik Danışman: İrem Su Yüksel
                                </p>






                            </div>
                        </div>
                    </div>
                </article>
                <article className=" mx-5 bg-gray-100 p-4 text-white text-sm space-y-2 mb-4 border sm:p-6 lg:p-8">

                    <button className='bg-purple-700 w-full mx-auto p-1'>Haftalık Ders Programı </button>
                    <button className='bg-blue-500 w-full mx-auto p-1'>Tarihsel Not Dökümü</button>


                </article>
                <article className=" mx-5 bg-gray-100 p-4 border sm:p-6 lg:p-8">
                    <p className='text-sm text'>Aktif Yıl Dersleri</p>
                    <div>
                        {/* Your other content here */}

                        {/* Horizontal separator */}
                        <div style={{ borderBottom: '1px solid #D3D3D3' }}></div>

                        {/* Your other content here */}
                    </div>
                    <p className='mt-4 text-sm p-1 text-white bg-gray-500'>Güz</p>

                    <div className='m-1 mt-2'>
                        <div className='border space-y-2 text-sm bg-white p-2'>

                            <p className='text-lg'>HIST 101a
                            </p>
                            <p  >Atatürk İlkeleri ve İnkılap Tarihi I
                            </p>
                            <p>Öğr. Gör. Zeynep ZENGİN
                            </p>
                            <div>
                                {/* Your other content here */}

                                {/* Horizontal separator */}
                                <div style={{ borderBottom: '1px solid #D3D3D3' }}></div>

                                {/* Your other content here */}
                            </div>
                            <div className='py-2'
                            >
                                <p className='text-gray-400' style={{ fontStyle: 'italic' }}>Başarı Durumu
                                </p>
                                <p>Durumu Netleşmemiş
                                </p></div>
                            <div
                            >
                                <p className='text-gray-400' style={{ fontStyle: 'italic' }}>Devam Durumu
                                </p>
                                <p>Devamlı
                                </p></div>
                            <p className='text-gray-400' style={{ fontStyle: 'italic' }}>Sınav Bilgileri

                            </p>                                <p className='text-gray-400' style={{ fontStyle: 'italic' }}>Notu / Harf Not
                            </p>
                            <div className='mb-2'>
                                {/* Your other content here */}

                                {/* Horizontal separator */}
                                <div style={{ borderBottom: '1px solid #D3D3D3' }}></div>

                                {/* Your other content here */}
                            </div>
                            <p className='text-gray-400' style={{ fontStyle: 'italic' }}>Devamsızlık Hesaplama / Dökümanlar

                            </p>
                            <div className='flex space-x-1 flex-row '>
                                <button className='border p-1'>
                                    <svg fill="#D3D3D3" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 485.017 485.017"  >
                                        <g>
                                            <path d="M361.205,68.899c-14.663,0-28.447,5.71-38.816,16.078c-21.402,21.403-21.402,56.228,0,77.631
		c10.368,10.368,24.153,16.078,38.815,16.078s28.447-5.71,38.816-16.078c21.402-21.403,21.402-56.228,0-77.631
		C389.652,74.609,375.867,68.899,361.205,68.899z M378.807,141.394c-4.702,4.702-10.953,7.292-17.603,7.292
		s-12.901-2.59-17.603-7.291c-9.706-9.706-9.706-25.499,0-35.205c4.702-4.702,10.953-7.291,17.603-7.291s12.9,2.589,17.603,7.291
		C388.513,115.896,388.513,131.688,378.807,141.394z"/>
                                            <path d="M441.961,43.036C414.21,15.284,377.311,0,338.064,0c-39.248,0-76.146,15.284-103.897,43.036
		c-42.226,42.226-54.491,105.179-32.065,159.698L0.254,404.584l-0.165,80.268l144.562,0.165v-55.722h55.705l0-55.705h55.705v-64.492
		l26.212-26.212c17.615,7.203,36.698,10.976,55.799,10.976c39.244,0,76.14-15.282,103.889-43.032
		C499.25,193.541,499.25,100.325,441.961,43.036z M420.748,229.617c-22.083,22.083-51.445,34.245-82.676,34.245
		c-18.133,0-36.237-4.265-52.353-12.333l-9.672-4.842l-49.986,49.985v46.918h-55.705l0,55.705h-55.705v55.688l-84.5-0.096
		l0.078-37.85L238.311,208.95l-4.842-9.672c-22.572-45.087-13.767-99.351,21.911-135.029C277.466,42.163,306.83,30,338.064,30
		c31.234,0,60.598,12.163,82.684,34.249C466.34,109.841,466.34,184.025,420.748,229.617z"/>
                                        </g>
                                    </svg>

                                </button>
                                <p>/</p>
                                <button className='border p-1  '>
                                    <svg width="24" fill="#D3D3D3" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M22 24h-20v-24h14l6 6v18zm-7-23h-12v22h18v-16h-6v-6zm3 15v1h-12v-1h12zm0-3v1h-12v-1h12zm0-3v1h-12v-1h12zm-2-4h4.586l-4.586-4.586v4.586z" /></svg>

                                </button>
                            </div>
                        </div>


                    </div>

                    <div className='m-1 mt-2'>
                        <div className='border space-y-2 text-sm bg-white p-2'>

                            <p className='text-lg'>HIST 101a
                            </p>
                            <p  >Atatürk İlkeleri ve İnkılap Tarihi I
                            </p>
                            <p>Öğr. Gör. Zeynep ZENGİN
                            </p>
                            <div>
                                {/* Your other content here */}

                                {/* Horizontal separator */}
                                <div style={{ borderBottom: '1px solid #D3D3D3' }}></div>

                                {/* Your other content here */}
                            </div>
                            <div className='py-2'
                            >
                                <p className='text-gray-400' style={{ fontStyle: 'italic' }}>Başarı Durumu
                                </p>
                                <p>Durumu Netleşmemiş
                                </p></div>
                            <div
                            >
                                <p className='text-gray-400' style={{ fontStyle: 'italic' }}>Devam Durumu
                                </p>
                                <p>Devamlı
                                </p></div>
                            <p className='text-gray-400' style={{ fontStyle: 'italic' }}>Sınav Bilgileri

                            </p>                                <p className='text-gray-400' style={{ fontStyle: 'italic' }}>Notu / Harf Not
                            </p>
                            <div className='mb-2'>
                                {/* Your other content here */}

                                {/* Horizontal separator */}
                                <div style={{ borderBottom: '1px solid #D3D3D3' }}></div>

                                {/* Your other content here */}
                            </div>
                            <p className='text-gray-400' style={{ fontStyle: 'italic' }}>Devamsızlık Hesaplama / Dökümanlar

                            </p>
                            <div className='flex space-x-1 flex-row '>
                                <button className='border p-1'>
                                    <svg fill="#D3D3D3" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 485.017 485.017"  >
                                        <g>
                                            <path d="M361.205,68.899c-14.663,0-28.447,5.71-38.816,16.078c-21.402,21.403-21.402,56.228,0,77.631
		c10.368,10.368,24.153,16.078,38.815,16.078s28.447-5.71,38.816-16.078c21.402-21.403,21.402-56.228,0-77.631
		C389.652,74.609,375.867,68.899,361.205,68.899z M378.807,141.394c-4.702,4.702-10.953,7.292-17.603,7.292
		s-12.901-2.59-17.603-7.291c-9.706-9.706-9.706-25.499,0-35.205c4.702-4.702,10.953-7.291,17.603-7.291s12.9,2.589,17.603,7.291
		C388.513,115.896,388.513,131.688,378.807,141.394z"/>
                                            <path d="M441.961,43.036C414.21,15.284,377.311,0,338.064,0c-39.248,0-76.146,15.284-103.897,43.036
		c-42.226,42.226-54.491,105.179-32.065,159.698L0.254,404.584l-0.165,80.268l144.562,0.165v-55.722h55.705l0-55.705h55.705v-64.492
		l26.212-26.212c17.615,7.203,36.698,10.976,55.799,10.976c39.244,0,76.14-15.282,103.889-43.032
		C499.25,193.541,499.25,100.325,441.961,43.036z M420.748,229.617c-22.083,22.083-51.445,34.245-82.676,34.245
		c-18.133,0-36.237-4.265-52.353-12.333l-9.672-4.842l-49.986,49.985v46.918h-55.705l0,55.705h-55.705v55.688l-84.5-0.096
		l0.078-37.85L238.311,208.95l-4.842-9.672c-22.572-45.087-13.767-99.351,21.911-135.029C277.466,42.163,306.83,30,338.064,30
		c31.234,0,60.598,12.163,82.684,34.249C466.34,109.841,466.34,184.025,420.748,229.617z"/>
                                        </g>
                                    </svg>

                                </button>
                                <p>/</p>
                                <button className='border p-1  '>
                                    <svg width="24" fill="#D3D3D3" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M22 24h-20v-24h14l6 6v18zm-7-23h-12v22h18v-16h-6v-6zm3 15v1h-12v-1h12zm0-3v1h-12v-1h12zm0-3v1h-12v-1h12zm-2-4h4.586l-4.586-4.586v4.586z" /></svg>

                                </button>
                            </div>
                        </div>


                    </div><div className='m-1 mt-2'>
                        <div className='border space-y-2 text-sm bg-white p-2'>

                            <p className='text-lg'>HUK 101

                            </p>
                            <p  >Hukuka Giriş ve Temel Kavramlar

                            </p>
                            <p>Dr. Öğr. Üyesi OLGU ÖZDEMİR ERTÜRK

                            </p>
                            <div>
                                {/* Your other content here */}

                                {/* Horizontal separator */}
                                <div style={{ borderBottom: '1px solid #D3D3D3' }}></div>

                                {/* Your other content here */}
                            </div>
                            <div className='py-2'
                            >
                                <p className='text-gray-400' style={{ fontStyle: 'italic' }}>Başarı Durumu
                                </p>
                                <p>Durumu Netleşmemiş
                                </p></div>
                            <div
                            >
                                <p className='text-gray-400' style={{ fontStyle: 'italic' }}>Devam Durumu
                                </p>
                                <p>Devamlı
                                </p></div>
                            <div>
                                <p className='text-gray-400' style={{ fontStyle: 'italic' }}>Sınav Bilgileri

                                </p>    <p className='pl-4 '>Vize: 76
                                </p></div>
                            <p className='text-gray-400' style={{ fontStyle: 'italic' }}>Notu / Harf Not
                            </p>
                            <div className='mb-2'>
                                {/* Your other content here */}

                                {/* Horizontal separator */}
                                <div style={{ borderBottom: '1px solid #D3D3D3' }}></div>

                                {/* Your other content here */}
                            </div>
                            <p className='text-gray-400' style={{ fontStyle: 'italic' }}>Devamsızlık Hesaplama / Dökümanlar

                            </p>
                            <div className='flex space-x-1 flex-row '>
                                <button className='border p-1'>
                                    <svg fill="#D3D3D3" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 485.017 485.017"  >
                                        <g>
                                            <path d="M361.205,68.899c-14.663,0-28.447,5.71-38.816,16.078c-21.402,21.403-21.402,56.228,0,77.631
		c10.368,10.368,24.153,16.078,38.815,16.078s28.447-5.71,38.816-16.078c21.402-21.403,21.402-56.228,0-77.631
		C389.652,74.609,375.867,68.899,361.205,68.899z M378.807,141.394c-4.702,4.702-10.953,7.292-17.603,7.292
		s-12.901-2.59-17.603-7.291c-9.706-9.706-9.706-25.499,0-35.205c4.702-4.702,10.953-7.291,17.603-7.291s12.9,2.589,17.603,7.291
		C388.513,115.896,388.513,131.688,378.807,141.394z"/>
                                            <path d="M441.961,43.036C414.21,15.284,377.311,0,338.064,0c-39.248,0-76.146,15.284-103.897,43.036
		c-42.226,42.226-54.491,105.179-32.065,159.698L0.254,404.584l-0.165,80.268l144.562,0.165v-55.722h55.705l0-55.705h55.705v-64.492
		l26.212-26.212c17.615,7.203,36.698,10.976,55.799,10.976c39.244,0,76.14-15.282,103.889-43.032
		C499.25,193.541,499.25,100.325,441.961,43.036z M420.748,229.617c-22.083,22.083-51.445,34.245-82.676,34.245
		c-18.133,0-36.237-4.265-52.353-12.333l-9.672-4.842l-49.986,49.985v46.918h-55.705l0,55.705h-55.705v55.688l-84.5-0.096
		l0.078-37.85L238.311,208.95l-4.842-9.672c-22.572-45.087-13.767-99.351,21.911-135.029C277.466,42.163,306.83,30,338.064,30
		c31.234,0,60.598,12.163,82.684,34.249C466.34,109.841,466.34,184.025,420.748,229.617z"/>
                                        </g>
                                    </svg>

                                </button>
                                <p>/</p>
                                <button className='border p-1  '>
                                    <svg width="24" fill="#D3D3D3" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M22 24h-20v-24h14l6 6v18zm-7-23h-12v22h18v-16h-6v-6zm3 15v1h-12v-1h12zm0-3v1h-12v-1h12zm0-3v1h-12v-1h12zm-2-4h4.586l-4.586-4.586v4.586z" /></svg>

                                </button>
                            </div>
                        </div>


                    </div><div className='m-1 mt-2'>
                        <div className='border space-y-2 text-sm bg-white p-2'>

                            <p className='text-lg'>HUK 103

                            </p>
                            <p  >Medeni Hukuk-I

                            </p>
                            <p>Dr. Öğr. Üyesi TANJU OKTAY YAŞAR

                            </p>
                            <div>
                                {/* Your other content here */}

                                {/* Horizontal separator */}
                                <div style={{ borderBottom: '1px solid #D3D3D3' }}></div>

                                {/* Your other content here */}
                            </div>
                            <div className='py-2'
                            >
                                <p className='text-gray-400' style={{ fontStyle: 'italic' }}>Başarı Durumu
                                </p>
                                <p>Durumu Netleşmemiş
                                </p></div>
                            <div
                            >
                                <p className='text-gray-400' style={{ fontStyle: 'italic' }}>Devam Durumu
                                </p>
                                <p>Devamlı
                                </p></div>
                            <div>
                                <p className='text-gray-400' style={{ fontStyle: 'italic' }}>Sınav Bilgileri

                                </p>    <p className='pl-4 '>Vize: 90

                                </p></div>                         <p className='text-gray-400' style={{ fontStyle: 'italic' }}>Notu / Harf Not
                            </p>
                            <div className='mb-2'>
                                {/* Your other content here */}

                                {/* Horizontal separator */}
                                <div style={{ borderBottom: '1px solid #D3D3D3' }}></div>

                                {/* Your other content here */}
                            </div>
                            <p className='text-gray-400' style={{ fontStyle: 'italic' }}>Devamsızlık Hesaplama / Dökümanlar

                            </p>
                            <div className='flex space-x-1 flex-row '>
                                <button className='border p-1'>
                                    <svg fill="#D3D3D3" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 485.017 485.017"  >
                                        <g>
                                            <path d="M361.205,68.899c-14.663,0-28.447,5.71-38.816,16.078c-21.402,21.403-21.402,56.228,0,77.631
		c10.368,10.368,24.153,16.078,38.815,16.078s28.447-5.71,38.816-16.078c21.402-21.403,21.402-56.228,0-77.631
		C389.652,74.609,375.867,68.899,361.205,68.899z M378.807,141.394c-4.702,4.702-10.953,7.292-17.603,7.292
		s-12.901-2.59-17.603-7.291c-9.706-9.706-9.706-25.499,0-35.205c4.702-4.702,10.953-7.291,17.603-7.291s12.9,2.589,17.603,7.291
		C388.513,115.896,388.513,131.688,378.807,141.394z"/>
                                            <path d="M441.961,43.036C414.21,15.284,377.311,0,338.064,0c-39.248,0-76.146,15.284-103.897,43.036
		c-42.226,42.226-54.491,105.179-32.065,159.698L0.254,404.584l-0.165,80.268l144.562,0.165v-55.722h55.705l0-55.705h55.705v-64.492
		l26.212-26.212c17.615,7.203,36.698,10.976,55.799,10.976c39.244,0,76.14-15.282,103.889-43.032
		C499.25,193.541,499.25,100.325,441.961,43.036z M420.748,229.617c-22.083,22.083-51.445,34.245-82.676,34.245
		c-18.133,0-36.237-4.265-52.353-12.333l-9.672-4.842l-49.986,49.985v46.918h-55.705l0,55.705h-55.705v55.688l-84.5-0.096
		l0.078-37.85L238.311,208.95l-4.842-9.672c-22.572-45.087-13.767-99.351,21.911-135.029C277.466,42.163,306.83,30,338.064,30
		c31.234,0,60.598,12.163,82.684,34.249C466.34,109.841,466.34,184.025,420.748,229.617z"/>
                                        </g>
                                    </svg>

                                </button>
                                <p>/</p>
                                <button className='border p-1  '>
                                    <svg width="24" fill="#D3D3D3" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M22 24h-20v-24h14l6 6v18zm-7-23h-12v22h18v-16h-6v-6zm3 15v1h-12v-1h12zm0-3v1h-12v-1h12zm0-3v1h-12v-1h12zm-2-4h4.586l-4.586-4.586v4.586z" /></svg>

                                </button>
                            </div>
                        </div>


                    </div><div className='m-1 mt-2'>
                        <div className='border space-y-2 text-sm bg-white p-2'>

                            <p className='text-lg'>HUK 105
                            </p>
                            <p  >Anayasa Hukuku-I

                            </p>
                            <p>Prof. Dr. Sezgin SEYMEN ÇEBİ

                            </p>
                            <div>
                                {/* Your other content here */}

                                {/* Horizontal separator */}
                                <div style={{ borderBottom: '1px solid #D3D3D3' }}></div>

                                {/* Your other content here */}
                            </div>
                            <div className='py-2'
                            >
                                <p className='text-gray-400' style={{ fontStyle: 'italic' }}>Başarı Durumu
                                </p>
                                <p>Durumu Netleşmemiş
                                </p></div>
                            <div
                            >
                                <p className='text-gray-400' style={{ fontStyle: 'italic' }}>Devam Durumu
                                </p>
                                <p>Devamlı
                                </p></div>
                            <div>
                                <p className='text-gray-400' style={{ fontStyle: 'italic' }}>Sınav Bilgileri

                                </p>    <p className='pl-4 '>Vize: 73

                                </p></div>                             <p className='text-gray-400' style={{ fontStyle: 'italic' }}>Notu / Harf Not
                            </p>
                            <div className='mb-2'>
                                {/* Your other content here */}

                                {/* Horizontal separator */}
                                <div style={{ borderBottom: '1px solid #D3D3D3' }}></div>

                                {/* Your other content here */}
                            </div>
                            <p className='text-gray-400' style={{ fontStyle: 'italic' }}>Devamsızlık Hesaplama / Dökümanlar

                            </p>
                            <div className='flex space-x-1 flex-row '>
                                <button className='border p-1'>
                                    <svg fill="#D3D3D3" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 485.017 485.017"  >
                                        <g>
                                            <path d="M361.205,68.899c-14.663,0-28.447,5.71-38.816,16.078c-21.402,21.403-21.402,56.228,0,77.631
		c10.368,10.368,24.153,16.078,38.815,16.078s28.447-5.71,38.816-16.078c21.402-21.403,21.402-56.228,0-77.631
		C389.652,74.609,375.867,68.899,361.205,68.899z M378.807,141.394c-4.702,4.702-10.953,7.292-17.603,7.292
		s-12.901-2.59-17.603-7.291c-9.706-9.706-9.706-25.499,0-35.205c4.702-4.702,10.953-7.291,17.603-7.291s12.9,2.589,17.603,7.291
		C388.513,115.896,388.513,131.688,378.807,141.394z"/>
                                            <path d="M441.961,43.036C414.21,15.284,377.311,0,338.064,0c-39.248,0-76.146,15.284-103.897,43.036
		c-42.226,42.226-54.491,105.179-32.065,159.698L0.254,404.584l-0.165,80.268l144.562,0.165v-55.722h55.705l0-55.705h55.705v-64.492
		l26.212-26.212c17.615,7.203,36.698,10.976,55.799,10.976c39.244,0,76.14-15.282,103.889-43.032
		C499.25,193.541,499.25,100.325,441.961,43.036z M420.748,229.617c-22.083,22.083-51.445,34.245-82.676,34.245
		c-18.133,0-36.237-4.265-52.353-12.333l-9.672-4.842l-49.986,49.985v46.918h-55.705l0,55.705h-55.705v55.688l-84.5-0.096
		l0.078-37.85L238.311,208.95l-4.842-9.672c-22.572-45.087-13.767-99.351,21.911-135.029C277.466,42.163,306.83,30,338.064,30
		c31.234,0,60.598,12.163,82.684,34.249C466.34,109.841,466.34,184.025,420.748,229.617z"/>
                                        </g>
                                    </svg>

                                </button>
                                <p>/</p>
                                <button className='border p-1  '>
                                    <svg width="24" fill="#D3D3D3" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M22 24h-20v-24h14l6 6v18zm-7-23h-12v22h18v-16h-6v-6zm3 15v1h-12v-1h12zm0-3v1h-12v-1h12zm0-3v1h-12v-1h12zm-2-4h4.586l-4.586-4.586v4.586z" /></svg>

                                </button>
                            </div>
                        </div>


                    </div><div className='m-1 mt-2'>
                        <div className='border space-y-2 text-sm bg-white p-2'>

                            <p className='text-lg'>HUK 107
                            </p>
                            <p  >Roma Hukuku

                            </p>
                            <p>Dr. Öğr. Üyesi Yılmaz YURTSEVEN


                            </p>
                            <div>
                                {/* Your other content here */}

                                {/* Horizontal separator */}
                                <div style={{ borderBottom: '1px solid #D3D3D3' }}></div>

                                {/* Your other content here */}
                            </div>
                            <div className='py-2'
                            >
                                <p className='text-gray-400' style={{ fontStyle: 'italic' }}>Başarı Durumu
                                </p>
                                <p>Durumu Netleşmemiş
                                </p></div>
                            <div
                            >
                                <p className='text-gray-400' style={{ fontStyle: 'italic' }}>Devam Durumu
                                </p>
                                <p>Devamlı
                                </p></div>
                            <div>
                                <p className='text-gray-400' style={{ fontStyle: 'italic' }}>Sınav Bilgileri

                                </p>    <p className='pl-4 '>Vize: 70

                                </p></div>                             <p className='text-gray-400' style={{ fontStyle: 'italic' }}>Notu / Harf Not
                            </p>
                            <div className='mb-2'>
                                {/* Your other content here */}

                                {/* Horizontal separator */}
                                <div style={{ borderBottom: '1px solid #D3D3D3' }}></div>

                                {/* Your other content here */}
                            </div>
                            <p className='text-gray-400' style={{ fontStyle: 'italic' }}>Devamsızlık Hesaplama / Dökümanlar

                            </p>
                            <div className='flex space-x-1 flex-row '>
                                <button className='border p-1'>
                                    <svg fill="#D3D3D3" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 485.017 485.017"  >
                                        <g>
                                            <path d="M361.205,68.899c-14.663,0-28.447,5.71-38.816,16.078c-21.402,21.403-21.402,56.228,0,77.631
		c10.368,10.368,24.153,16.078,38.815,16.078s28.447-5.71,38.816-16.078c21.402-21.403,21.402-56.228,0-77.631
		C389.652,74.609,375.867,68.899,361.205,68.899z M378.807,141.394c-4.702,4.702-10.953,7.292-17.603,7.292
		s-12.901-2.59-17.603-7.291c-9.706-9.706-9.706-25.499,0-35.205c4.702-4.702,10.953-7.291,17.603-7.291s12.9,2.589,17.603,7.291
		C388.513,115.896,388.513,131.688,378.807,141.394z"/>
                                            <path d="M441.961,43.036C414.21,15.284,377.311,0,338.064,0c-39.248,0-76.146,15.284-103.897,43.036
		c-42.226,42.226-54.491,105.179-32.065,159.698L0.254,404.584l-0.165,80.268l144.562,0.165v-55.722h55.705l0-55.705h55.705v-64.492
		l26.212-26.212c17.615,7.203,36.698,10.976,55.799,10.976c39.244,0,76.14-15.282,103.889-43.032
		C499.25,193.541,499.25,100.325,441.961,43.036z M420.748,229.617c-22.083,22.083-51.445,34.245-82.676,34.245
		c-18.133,0-36.237-4.265-52.353-12.333l-9.672-4.842l-49.986,49.985v46.918h-55.705l0,55.705h-55.705v55.688l-84.5-0.096
		l0.078-37.85L238.311,208.95l-4.842-9.672c-22.572-45.087-13.767-99.351,21.911-135.029C277.466,42.163,306.83,30,338.064,30
		c31.234,0,60.598,12.163,82.684,34.249C466.34,109.841,466.34,184.025,420.748,229.617z"/>
                                        </g>
                                    </svg>

                                </button>
                                <p>/</p>
                                <button className='border p-1  '>
                                    <svg width="24" fill="#D3D3D3" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M22 24h-20v-24h14l6 6v18zm-7-23h-12v22h18v-16h-6v-6zm3 15v1h-12v-1h12zm0-3v1h-12v-1h12zm0-3v1h-12v-1h12zm-2-4h4.586l-4.586-4.586v4.586z" /></svg>

                                </button>
                            </div>
                        </div>


                    </div><div className='m-1 mt-2'>
                        <div className='border space-y-2 text-sm bg-white p-2'>

                            <p className='text-lg'>INGL 101
                            </p>
                            <p  >İngilizce I

                            </p>
                            <p>Öğr. Gör. Kadriye Sezin İRTEM

                            </p>
                            <div>
                                {/* Your other content here */}

                                {/* Horizontal separator */}
                                <div style={{ borderBottom: '1px solid #D3D3D3' }}></div>

                                {/* Your other content here */}
                            </div>
                            <div className='py-2'
                            >
                                <p className='text-gray-400' style={{ fontStyle: 'italic' }}>Başarı Durumu
                                </p>
                                <p>Durumu Netleşmemiş
                                </p></div>
                            <div
                            >
                                <p className='text-gray-400' style={{ fontStyle: 'italic' }}>Devam Durumu
                                </p>
                                <p>Devamlı
                                </p></div>
                            <div>
                                <p className='text-gray-400' style={{ fontStyle: 'italic' }}>Sınav Bilgileri

                                </p>    <p className='pl-4 '>Vize: 96

                                </p></div>                      <p className='text-gray-400' style={{ fontStyle: 'italic' }}>Notu / Harf Not
                            </p>
                            <div className='mb-2'>
                                {/* Your other content here */}

                                {/* Horizontal separator */}
                                <div style={{ borderBottom: '1px solid #D3D3D3' }}></div>

                                {/* Your other content here */}
                            </div>
                            <p className='text-gray-400' style={{ fontStyle: 'italic' }}>Devamsızlık Hesaplama / Dökümanlar

                            </p>
                            <div className='flex space-x-1 flex-row '>
                                <button className='border p-1'>
                                    <svg fill="#D3D3D3" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 485.017 485.017"  >
                                        <g>
                                            <path d="M361.205,68.899c-14.663,0-28.447,5.71-38.816,16.078c-21.402,21.403-21.402,56.228,0,77.631
		c10.368,10.368,24.153,16.078,38.815,16.078s28.447-5.71,38.816-16.078c21.402-21.403,21.402-56.228,0-77.631
		C389.652,74.609,375.867,68.899,361.205,68.899z M378.807,141.394c-4.702,4.702-10.953,7.292-17.603,7.292
		s-12.901-2.59-17.603-7.291c-9.706-9.706-9.706-25.499,0-35.205c4.702-4.702,10.953-7.291,17.603-7.291s12.9,2.589,17.603,7.291
		C388.513,115.896,388.513,131.688,378.807,141.394z"/>
                                            <path d="M441.961,43.036C414.21,15.284,377.311,0,338.064,0c-39.248,0-76.146,15.284-103.897,43.036
		c-42.226,42.226-54.491,105.179-32.065,159.698L0.254,404.584l-0.165,80.268l144.562,0.165v-55.722h55.705l0-55.705h55.705v-64.492
		l26.212-26.212c17.615,7.203,36.698,10.976,55.799,10.976c39.244,0,76.14-15.282,103.889-43.032
		C499.25,193.541,499.25,100.325,441.961,43.036z M420.748,229.617c-22.083,22.083-51.445,34.245-82.676,34.245
		c-18.133,0-36.237-4.265-52.353-12.333l-9.672-4.842l-49.986,49.985v46.918h-55.705l0,55.705h-55.705v55.688l-84.5-0.096
		l0.078-37.85L238.311,208.95l-4.842-9.672c-22.572-45.087-13.767-99.351,21.911-135.029C277.466,42.163,306.83,30,338.064,30
		c31.234,0,60.598,12.163,82.684,34.249C466.34,109.841,466.34,184.025,420.748,229.617z"/>
                                        </g>
                                    </svg>

                                </button>
                                <p>/</p>
                                <button className='border p-1  '>
                                    <svg width="24" fill="#D3D3D3" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M22 24h-20v-24h14l6 6v18zm-7-23h-12v22h18v-16h-6v-6zm3 15v1h-12v-1h12zm0-3v1h-12v-1h12zm0-3v1h-12v-1h12zm-2-4h4.586l-4.586-4.586v4.586z" /></svg>

                                </button>
                            </div>
                        </div>


                    </div><div className='m-1 mt-2'>
                        <div className='border space-y-2 text-sm bg-white p-2'>

                            <p className='text-lg'>TURK 101a

                            </p>
                            <p  >Türk Dili I

                            </p>
                            <p>Öğr. Gör. Kübra AKÇAN

                            </p>
                            <div>
                                {/* Your other content here */}

                                {/* Horizontal separator */}
                                <div style={{ borderBottom: '1px solid #D3D3D3' }}></div>

                                {/* Your other content here */}
                            </div>
                            <div className='py-2'
                            >
                                <p className='text-gray-400' style={{ fontStyle: 'italic' }}>Başarı Durumu
                                </p>
                                <p>Durumu Netleşmemiş
                                </p></div>
                            <div
                            >
                                <p className='text-gray-400' style={{ fontStyle: 'italic' }}>Devam Durumu
                                </p>
                                <p>Devamlı
                                </p></div>
                            <div>
                                <p className='text-gray-400' style={{ fontStyle: 'italic' }}>Sınav Bilgileri

                                </p>    <p className='pl-4 '>Vize: 82

                                </p></div>                             <p className='text-gray-400' style={{ fontStyle: 'italic' }}>Notu / Harf Not
                            </p>
                            <div className='mb-2'>
                                {/* Your other content here */}

                                {/* Horizontal separator */}
                                <div style={{ borderBottom: '1px solid #D3D3D3' }}></div>

                                {/* Your other content here */}
                            </div>
                            <p className='text-gray-400' style={{ fontStyle: 'italic' }}>Devamsızlık Hesaplama / Dökümanlar

                            </p>
                            <div className='flex space-x-1 flex-row '>
                                <button className='border p-1'>
                                    <svg fill="#D3D3D3" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 485.017 485.017"  >
                                        <g>
                                            <path d="M361.205,68.899c-14.663,0-28.447,5.71-38.816,16.078c-21.402,21.403-21.402,56.228,0,77.631
		c10.368,10.368,24.153,16.078,38.815,16.078s28.447-5.71,38.816-16.078c21.402-21.403,21.402-56.228,0-77.631
		C389.652,74.609,375.867,68.899,361.205,68.899z M378.807,141.394c-4.702,4.702-10.953,7.292-17.603,7.292
		s-12.901-2.59-17.603-7.291c-9.706-9.706-9.706-25.499,0-35.205c4.702-4.702,10.953-7.291,17.603-7.291s12.9,2.589,17.603,7.291
		C388.513,115.896,388.513,131.688,378.807,141.394z"/>
                                            <path d="M441.961,43.036C414.21,15.284,377.311,0,338.064,0c-39.248,0-76.146,15.284-103.897,43.036
		c-42.226,42.226-54.491,105.179-32.065,159.698L0.254,404.584l-0.165,80.268l144.562,0.165v-55.722h55.705l0-55.705h55.705v-64.492
		l26.212-26.212c17.615,7.203,36.698,10.976,55.799,10.976c39.244,0,76.14-15.282,103.889-43.032
		C499.25,193.541,499.25,100.325,441.961,43.036z M420.748,229.617c-22.083,22.083-51.445,34.245-82.676,34.245
		c-18.133,0-36.237-4.265-52.353-12.333l-9.672-4.842l-49.986,49.985v46.918h-55.705l0,55.705h-55.705v55.688l-84.5-0.096
		l0.078-37.85L238.311,208.95l-4.842-9.672c-22.572-45.087-13.767-99.351,21.911-135.029C277.466,42.163,306.83,30,338.064,30
		c31.234,0,60.598,12.163,82.684,34.249C466.34,109.841,466.34,184.025,420.748,229.617z"/>
                                        </g>
                                    </svg>

                                </button>
                                <p>/</p>
                                <button className='border p-1  '>
                                    <svg width="24" fill="#D3D3D3" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M22 24h-20v-24h14l6 6v18zm-7-23h-12v22h18v-16h-6v-6zm3 15v1h-12v-1h12zm0-3v1h-12v-1h12zm0-3v1h-12v-1h12zm-2-4h4.586l-4.586-4.586v4.586z" /></svg>

                                </button>
                            </div>
                        </div>


                    </div>
                </article>


            </section>

        </div >



    );
};

export default HomePage;
