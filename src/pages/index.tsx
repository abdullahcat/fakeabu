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
            <section className='text-black pt-[110px] min-h-screen bg-white'>
                <article className="bg-blue-50 mx-5 bg-white   p-3 m-3  border-l-8   border-blue-300    ">
                    <div className='flex flex-row  space-x-4'>
                        <img className='h-[150px] v-10' src="data:image/jpg;base64,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" alt="" />
                        <div className="flex items-center sm:gap-8">


                            <div className='space-y-3'>

                                <p> 230102152 - Abdullah ÇAT</p>
                                <p className='text-sm'>Kimlik No: 12323314119
                                </p>
                                <p className='text-sm'>Akademik Program:</p>
                                <select className='text-sm border border-gray' value={"selectedItem"}  >
                                    <option value="hukuk">Hukuk Fakültesi / Hukuk / Hukuk</option>
                                </select>

                                <p className='text-sm'>Akademik Danışman: İrem YÜKSEL
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