export const fetchStatesAndCities = async () => {
  try {
    const statesAndCities = [
      {
        state: "Andhra Pradesh",
        cities: ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Kurnool"],
      },
      {
        state: "Arunachal Pradesh",
        cities: ["Itanagar", "Naharlagun"],
      },
      {
        state: "Assam",
        cities: ["Guwahati", "Dibrugarh", "Silchar", "Jorhat", "Nagaon"],
      },
      {
        state: "Bihar",
        cities: ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Purnia"],
      },
      {
        state: "Chhattisgarh",
        cities: ["Raipur", "Bhilai", "Bilaspur", "Korba", "Raigarh"],
      },
      {
        state: "Goa",
        cities: ["Panaji", "Margao", "Vasco da Gama"],
      },
      {
        state: "Gujarat",
        cities: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Gandhinagar"],
      },
      {
        state: "Haryana",
        cities: ["Faridabad", "Gurgaon", "Panipat", "Ambala", "Hisar"],
      },
      {
        state: "Himachal Pradesh",
        cities: ["Shimla", "Mandi", "Dharamshala", "Solan", "Kullu"],
      },
      {
        state: "Jharkhand",
        cities: ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro", "Hazaribagh"],
      },
      {
        state: "Karnataka",
        cities: ["Bangalore", "Mysuru", "Hubli", "Mangalore", "Belagavi"],
      },
      {
        state: "Kerala",
        cities: [
          "Thiruvananthapuram",
          "Kochi",
          "Kozhikode",
          "Thrissur",
          "Kollam",
        ],
      },
      {
        state: "Madhya Pradesh",
        cities: ["Bhopal", "Indore", "Jabalpur", "Gwalior", "Ujjain"],
      },
      {
        state: "Maharashtra",
        cities: ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad"],
      },
      {
        state: "Manipur",
        cities: ["Imphal"],
      },
      {
        state: "Meghalaya",
        cities: ["Shillong"],
      },
      {
        state: "Mizoram",
        cities: ["Aizawl"],
      },
      {
        state: "Nagaland",
        cities: ["Kohima", "Dimapur"],
      },
      {
        state: "Odisha",
        cities: ["Bhubaneswar", "Cuttack", "Rourkela", "Sambalpur", "Puri"],
      },
      {
        state: "Punjab",
        cities: ["Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Bathinda"],
      },
      {
        state: "Rajasthan",
        cities: ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Ajmer"],
      },
      {
        state: "Sikkim",
        cities: ["Gangtok"],
      },
      {
        state: "Tamil Nadu",
        cities: [
          "Ambur",
          "Ariyalur",
          "Chengalpattu",
          "Chennai",
          "Coimbatore",
          "Cuddalore",
          "Dharmapuri",
          "Dindigul",
          "Erode",
          "Gudiyatham",
          "Kallakurichi",
          "Kancheepuram",
          "Karur",
          "Krishnagiri",
          "Madurai",
          "Mayiladuthurai",
          "Nagapattinam",
          "Namakkal",
          "Nilgiris",
          "Perambalur",
          "Pudukkottai",
          "Ramanathapuram",
          "Ranipet",
          "Salem",
          "Sivaganga",
          "Tenkasi",
          "Thanjavur",
          "Theni",
          "Thiruppattur",
          "Thoothukudi",
          "Tiruchirappalli",
          "Tirunelveli",
          "Tirupathur",
          "Tiruppur",
          "Tiruvallur",
          "Tiruvannamalai",
          "Tiruvarur",
          "Vaniyambadi",
          "Vellore",
          "Viluppuram",
          "Virudhunagar",
        ],
      },
      {
        state: "Telangana",
        cities: ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar", "Khammam"],
      },
      {
        state: "Tripura",
        cities: ["Agartala"],
      },
      {
        state: "Uttar Pradesh",
        cities: ["Lucknow", "Kanpur", "Agra", "Varanasi", "Allahabad"],
      },
      {
        state: "Uttarakhand",
        cities: ["Dehradun", "Haridwar", "Rishikesh", "Nainital", "Mussoorie"],
      },
      {
        state: "West Bengal",
        cities: ["Kolkata", "Howrah", "Durgapur", "Asansol", "Siliguri"],
      },
    ];

    const states = statesAndCities.map((item) => item.state);
    const cities = statesAndCities.reduce((acc, item) => {
      acc[item.state] = item.cities.filter((city) => city !== undefined);
      return acc;
    }, {});

    return { states, cities };
  } catch (error) {
    console.error("Error fetching Indian states and cities:", error);
    throw error;
  }
};
