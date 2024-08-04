const HOTELS_DATA_COUNT = 400;
const SITES_DATA_COUNT = 400;

const indianHotelCities = [
  { city: 'Adoni' },
  { city: 'Agra' },
  { city: 'Ahmedabad' },
  { city: 'Ajmer' },
  { city: 'Akola' },
  { city: 'Alappuzha' },
  { city: 'Aligarh' },
  { city: 'Alipurduar' },
  { city: 'Almora' },
  { city: 'Alwar' },
  { city: 'Amarpatan' },
  { city: 'Ambala' },
  { city: 'Ambur' },
  { city: 'Amravati' },
  { city: 'Amritsar' },
  { city: 'Anakapalli' },
  { city: 'Anand' },
  { city: 'Asansol' },
  { city: 'Auraiya' },
  { city: 'Aurangabad' },
  { city: 'Ayodhya' },
  { city: 'Badacsonytomaj (Nemesgulács)' },
  { city: 'Baddi' },
  { city: 'Bagalkot' },
  { city: 'Bagepalli' },
  { city: 'Bakkhali' },
  { city: 'Bangalore' },
  { city: 'Bani' },
  { city: 'Banjar' },
  { city: 'Bankura' },
  { city: 'Baramati' },
  { city: 'Bareilly' },
  { city: 'Barmer' },
  { city: 'Barpeta' },
  { city: 'Bascharage' },
  { city: 'Basohli' },
  { city: 'Bathinda' },
  { city: 'Bawal' },
  { city: 'Beas' },
  { city: 'Begusarai' },
  { city: 'Behrampur' },
  { city: 'Berhampore' },
  { city: 'Bettiah' },
  { city: 'Bewar' },
  { city: 'Bhadra' },
  { city: 'Bhadrak' },
  { city: 'Bharatpur' },
  { city: 'Bhilai' },
  { city: 'Bhilwara' },
  { city: 'Bhiwadi' },
  { city: 'Bhiwani' },
  { city: 'Bhiwapur' },
  { city: 'Bhogaon' },
  { city: 'Bhopal' },
  { city: 'Bhubaneswar' },
  { city: 'Bhuj' },
  { city: 'Bidhuna' },
  { city: 'Bihar sharif' },
  { city: 'Bijapur' },
  { city: 'Bijnor' },
  { city: 'Bikaner' },
  { city: 'Bilaspur' },
  { city: 'Bodhgaya' },
  { city: 'Bokaro' },
  { city: 'Budgam' },
  { city: 'Bulandshahr' },
  { city: 'Buldhana' },
  { city: 'Buxar' },
  { city: 'Calicut' },
  { city: 'Chaibasa' },
  { city: 'Chandausi' },
  { city: 'Chandigarh' },
  { city: 'Chandrapur' },
  { city: 'Charkhi-Dadri' },
  { city: 'Chennai' },
  { city: 'Chhota Chhindwara' },
  { city: 'Chidambaram' },
  { city: 'Chikballapur' },
  { city: 'Chikmagalur' },
  { city: 'Chitradurga' },
  { city: 'Chittoor' },
  { city: 'Chittorgarh' },
  { city: 'Chopan' },
  { city: 'Coimbatore' },
  { city: 'Cooch Behar' },
  { city: 'Coorg' },
  { city: 'Cuttack' },
  { city: 'Dalhousie' },
  { city: 'Daman' },
  { city: 'Dantewada' },
  { city: 'Darbhanga' },
  { city: 'Darjeeling' },
  { city: 'Datia' },
  { city: 'Dehradun' },
  { city: 'Delhi' },
  { city: 'Delhi Transit' },
  { city: 'Deoghar' },
  { city: 'Dewas' },
  { city: 'Dhanaura' },
  { city: 'Dhanbad' },
  { city: 'Dhar' },
  { city: 'Dharamshala' },
  { city: 'Dhubri' },
  { city: 'Dhule' },
  { city: 'Dibrugarh' },
  { city: 'Digha' },
  { city: 'Durgapur' },
  { city: 'Dwarahat' },
  { city: 'Eluru' },
  { city: 'Ernakulam' },
  { city: 'Erode' },
  { city: 'Etawah' },
  { city: 'Faridabad' },
  { city: 'Farukh Nagar' },
  { city: 'Gajarula' },
  { city: 'Ganderbal' },
  { city: 'Gandhinagar' },
  { city: 'Gangtok' },
  { city: 'Gaya' },
  { city: 'Ghaziabad' },
  { city: 'Goa' },
  { city: 'Gondal' },
  { city: 'Gorakhpur' },
  { city: 'Gudalur' },
  { city: 'Gulbarga' },
  { city: 'Guntur' },
  { city: 'Gurez' },
  { city: 'Gurgaon' },
  { city: 'Guruvayur' },
  { city: 'Guwahati' },
  { city: 'Gwalior' },
  { city: 'Hajin' },
  { city: 'Haldwani' },
  { city: 'Hansi' },
  { city: 'Hanumangarh' },
  { city: 'HAPUR 1' },
  { city: 'Harda' },
  { city: 'Hardoi' },
  { city: 'Haridwar' },
  { city: 'Hassan' },
  { city: 'Hathras' },
  { city: 'Havelock' },
  { city: 'Hazaribagh' },
  { city: 'Himmatnagar' },
  { city: 'Hisar' },
  { city: 'Hubli-Dharwad' },
  { city: 'Hyderabad' },
  { city: 'Indore' },
  { city: 'Jabalpur' },
  { city: 'Jaigaon' },
  { city: 'Jaipur' },
  { city: 'Jaisalmer' },
  { city: 'Jajpur' },
  { city: 'Jalandhar' },
  { city: 'Jammu' },
  { city: 'Jamshedpur' },
  { city: 'Jehanabad' },
  { city: 'Jhansi' },
  { city: 'Jhunjhunu' },
  { city: 'Jind' },
  { city: 'Jodhpur' },
  { city: 'Jorhat' },
  { city: 'Joshimath' },
  { city: 'Junagadh' },
  { city: 'Kadapa' },
  { city: 'Kadi' },
  { city: 'Kaimukhiya' },
  { city: 'Kakinada' },
  { city: 'Kalimpong' },
  { city: 'Kamareddy' },
  { city: 'Kangra' },
  { city: 'Kanker' },
  { city: 'Kannur' },
  { city: 'Kanpur' },
  { city: 'Kanyakumari' },
  { city: 'Karimnagar' },
  { city: 'Karnal' },
  { city: 'Kasargod' },
  { city: 'Kasauli' },
  { city: 'Kasganj' },
  { city: 'Kashipur' },
  { city: 'Katni' },
  { city: 'Katra' },
  { city: 'Kaziranga' },
  { city: 'Keylong' },
  { city: 'Khajuraho' },
  { city: 'Khammam' },
  { city: 'Kharar' },
  { city: 'Kinnaur' },
  { city: 'Kishangarh' },
  { city: 'Kochi' },
  { city: 'Kodaikanal' },
  { city: 'Kolhapur' },
  { city: 'Kolkata' },
  { city: 'Kollam' },
  { city: 'Kota' },
  { city: 'Kothapatnam' },
  { city: 'Kotputli' },
  { city: 'Kottayam' },
  { city: 'Kovalam' },
  { city: 'Kullu' },
  { city: 'Kumbakonam' },
  { city: 'Kurnool' },
  { city: 'Kurukshetra' },
  { city: 'Kushinagar' },
  { city: 'Lachung' },
  { city: 'Latagudi' },
  { city: 'Latur' },
  { city: 'Lava' },
  { city: 'Leh-Ladakh' },
  { city: 'Loharu' },
  { city: 'Lonavala' },
  { city: 'Lucknow' },
  { city: 'Ludhiana' },
  { city: 'Madurai' },
  { city: 'Mahabaleshwar' },
  { city: 'Mahabalipuram' },
  { city: 'Mahud' },
  { city: 'Malappuram' },
  { city: 'Malda' },
  { city: 'Manali' },
  { city: 'Mandarmoni' },
  { city: 'Mandi' },
  { city: 'Manesar' },
  { city: 'Mangalore' },
  { city: 'Marthandam' },
  { city: 'Mathura' },
  { city: 'Mcleod-Ganj' },
  { city: 'Meerut' },
  { city: 'Merta' },
  { city: 'Mirzapur' },
  { city: 'Mohali' },
  { city: 'Moradabad' },
  { city: 'Morbi' },
  { city: 'Motihari' },
  { city: 'Mount-Abu' },
  { city: 'Mumbai' },
  { city: 'Munnar' },
  { city: 'Mussoorie' },
  { city: 'Mysore' },
  { city: 'Nadiad' },
  { city: 'Nagercoil' },
  { city: 'Nagpur' },
  { city: 'Nainital' },
  { city: 'Namakkal' },
  { city: 'Narnaul' },
  { city: 'Nashik' },
  { city: 'Navi Mumbai' },
  { city: 'Navsari' },
  { city: 'Nawada' },
  { city: 'Neil Island' },
  { city: 'Nellore' },
  { city: 'Nizamabad' },
  { city: 'Noida' },
  { city: 'Noorpur' },
  { city: 'Ooty' },
  { city: 'Pachmarhi' },
  { city: 'Padanthalumoodu' },
  { city: 'Pahalgam' },
  { city: 'Palampur' },
  { city: 'Palani' },
  { city: 'Palwal' },
  { city: 'Panchkula' },
  { city: 'Panipat' },
  { city: 'Pathanamthitta' },
  { city: 'Patiala' },
  { city: 'Patna' },
  { city: 'Patnitop' },
  { city: 'Pelling' },
  { city: 'Phagwara' },
  { city: 'Pithampur' },
  { city: 'Pondicherry' },
  { city: 'Poonch' },
  { city: 'Poovar' },
  { city: 'Port-Blair' },
  { city: 'Pratapgarh' },
  { city: 'Prayagraj' },
  { city: 'Pune' },
  { city: 'Puri' },
  { city: 'Purulia' },
  { city: 'Pushkar' },
  { city: 'Raebareily' },
  { city: 'Raipur' },
  { city: 'Rajahmundry' },
  { city: 'Rajgir' },
  { city: 'Rajkot' },
  { city: 'Rajnandgaon' },
  { city: 'Rajpura' },
  { city: 'Ramgarh' },
  { city: 'Ranchi' },
  { city: 'Rangia' },
  { city: 'Ranikhet' },
  { city: 'Ranjangaon' },
  { city: 'Ranthambore' },
  { city: 'Rasulabad' },
  { city: 'Ratlam' },
  { city: 'Ravangla' },
  { city: 'Rewari' },
  { city: 'Rishikesh' },
  { city: 'Rohtak' },
  { city: 'Roorkee' },
  { city: 'Rourkela' },
  { city: 'Rudrapur' },
  { city: 'Sahawa' },
  { city: 'saint medard en jalles' },
  { city: 'Saint-Médard-en-Jalles' },
  { city: 'Salem' },
  { city: 'Sangareddy' },
  { city: 'Sangli' },
  { city: 'Sasaram' },
  { city: 'Satna' },
  { city: 'Selu' },
  { city: 'Shadnagar' },
  { city: 'Shantiniketan' },
  { city: 'Shillong' },
  { city: 'Shimla' },
  { city: 'Shirdi' },
  { city: 'Shrawasti' },
  { city: 'Sikar' },
  { city: 'Silchar' },
  { city: 'Siliguri' },
  { city: 'Sillery-Gaon' },
  { city: 'Sirhind' },
  { city: 'Sirohi' },
  { city: 'Sirsa' },
  { city: 'Sisai' },
  { city: 'Sitapur' },
  { city: 'Sonbhadra' },
  { city: 'Sonipat' },
  { city: 'Srinagar' },
  { city: 'Srinagar-Uttarakhand' },
  { city: 'Stockholm' },
  { city: 'Surat' },
  { city: 'Tajpur' },
  { city: 'Tangmarg' },
  { city: 'Tarapith' },
  { city: 'Tehri' },
  { city: 'Tenali' },
  { city: 'Tezpur' },
  { city: 'Thanjavur' },
  { city: 'Thekkady' },
  { city: 'Theni' },
  { city: 'Thiruvarur' },
  { city: 'Thrissur' },
  { city: 'Thuckalay' },
  { city: 'Tijara' },
  { city: 'Tindivanam' },
  { city: 'Tirunelveli' },
  { city: 'Tiruparapu' },
  { city: 'Tirupati' },
  { city: 'Tiruppur' },
  { city: 'Tiruvannamalai' },
  { city: 'Tirwa' },
  { city: 'Tirwaganj' },
  { city: 'Trichy' },
  { city: 'Trivandrum' },
  { city: 'Udaipur' },
  { city: 'Udhampur' },
  { city: 'Udupi-Manipal' },
  { city: 'Ujjain' },
  { city: 'Una' },
  { city: 'Unnao' },
  { city: 'Vadodara' },
  { city: 'Vapi' },
  { city: 'Varanasi' },
  { city: 'Varkala' },
  { city: 'Vellore' },
  { city: 'Vijayawada' },
  { city: 'Villupuram' },
  { city: 'Virudhunagar' },
  { city: 'Visakhapatnam' },
  { city: 'Vrindavan' },
  { city: 'Warangal' },
  { city: 'Wayanad' },
  { city: 'Yelagiri' },
  { city: 'Yercaud' },
  { city: 'Zirakpur' },
];

// fs.writeFileSync('../assets/indianHotels.json', JSON.stringify(indianHotels));

export { HOTELS_DATA_COUNT, indianHotelCities, SITES_DATA_COUNT };
