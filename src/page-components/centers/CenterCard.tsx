'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

// Center interface
export interface Center {
  id: number;
  name: string;
  city: string;
  state: string;
  address: string;
  image: string;
  phone?: string;
  email?: string;
  services?: string[];
  coordinates?: {
    lat: number;
    lng: number;
  };
  timings?: {
    weekdays: string;
    weekends: string;
  };
}

// Centers data
export const centersData: Center[] = [
  {
    id: 1,
    name: "Andheri",
    city: "Mumbai",
    state: "MAHARASHTRA",
    address: "Ground Floor, Business Point, Near Metro Station, Andheri East, Mumbai 400069",
    image: "/images/Andheri.png",
    phone: "+91 1234567891",
    email: "andheri@progenesis.in",
    services: ["IVF", "IUI", "Surrogacy", "Egg Freezing"],
    coordinates: {
      lat: 19.1136,
      lng: 72.8697
    },
    timings: {
      weekdays: "8:00 AM - 9:00 PM",
      weekends: "9:00 AM - 5:00 PM"
    }
  },
  {
    id: 2,
    name: "Thane",
    city: "Thane",
    state: "MAHARASHTRA",
    address: "16, First Floor, Dosti Imperia, Ghodbunder Road, Opp R Mall, Manpada, Thane West 400607",
    image: "/images/Thane.png",
    phone: "+91 1234567890",
    email: "thane@progenesis.in",
    services: ["IVF", "IUI", "ICSI", "Fertility Preservation"],
    coordinates: {
      lat: 19.2183,
      lng: 72.9781
    },
    timings: {
      weekdays: "9:00 AM - 8:00 PM",
      weekends: "9:00 AM - 2:00 PM"
    }
  },
  {
    id: 3,
    name: "Borivali",
    city: "Mumbai",
    state: "MAHARASHTRA",
    address: "201, Sunshine Plaza, Near Station, Borivali West, Mumbai 400092",
    image: "/images/Borivali.png",
    phone: "+91 1234567892",
    email: "borivali@progenesis.in",
    services: ["IVF", "Fertility Assessment", "Genetic Testing"],
    coordinates: {
      lat: 19.2307,
      lng: 72.8567
    },
    timings: {
      weekdays: "9:00 AM - 7:00 PM",
      weekends: "10:00 AM - 3:00 PM"
    }
  },
  {
    id: 4,
    name: "Pune",
    city: "Pune",
    state: "MAHARASHTRA",
    address: "Crystal Plaza, 3rd Floor, Near FC Road, Shivajinagar, Pune 411005",
    image: "/images/Pune.png",
    phone: "+91 1234567893",
    email: "pune@progenesis.in",
    services: ["IVF", "IUI", "Fertility Counseling"],
    coordinates: {
      lat: 18.5204,
      lng: 73.8567
    },
    timings: {
      weekdays: "9:00 AM - 8:00 PM",
      weekends: "9:00 AM - 4:00 PM"
    }
  },
  {
    id: 5,
    name: "Nashik",
    city: "Nashik",
    state: "MAHARASHTRA",
    address: "Medicare Center, College Road, Near City Center Mall, Nashik 422005",
    image: "/images/Nashik.jpg",
    phone: "+91 1234567894",
    email: "nashik@progenesis.in",
    services: ["IVF", "Fertility Treatment", "Embryology"],
    coordinates: {
      lat: 20.0059,
      lng: 73.7912
    },
    timings: {
      weekdays: "9:00 AM - 7:00 PM",
      weekends: "9:00 AM - 2:00 PM"
    }
  },
  {
    id: 6,
    name: "Jalgaon",
    city: "Jalgaon",
    state: "MAHARASHTRA",
    address: "Jalgaon Medical Hub, Near Railway Station, Jalgaon 425001",
    image: "/images/Jalgaon.png",
    phone: "+91 1234567895",
    email: "jalgaon@progenesis.in",
    services: ["IVF", "IUI", "Fertility Consultation"],
    coordinates: {
      lat: 21.0075,
      lng: 75.5636
    },
    timings: {
      weekdays: "9:00 AM - 6:00 PM",
      weekends: "10:00 AM - 2:00 PM"
    }
  },
  {
    id: 7,
    name: "Ghatkopar",
    city: "Mumbai",
    state: "MAHARASHTRA",
    address: "Ghatkopar Health Center, Near Ghatkopar Station, Mumbai 400077",
    image: "/images/Ghatkopar.png",
    phone: "+91 1234567896",
    email: "ghatkopar@progenesis.in",
    services: ["IVF", "IUI", "Genetic Counseling"],
    coordinates: {
      lat: 19.0812,
      lng: 72.9065
    },
    timings: {
      weekdays: "9:00 AM - 8:00 PM",
      weekends: "9:00 AM - 3:00 PM"
    }
  },
  {
    id: 8,
    name: "Vashi",
    city: "Navi Mumbai",
    state: "MAHARASHTRA",
    address: "Vashi Plaza, Sector 17, Vashi, Navi Mumbai 400703",
    image: "/images/Vashi.png",
    phone: "+91 1234567897",
    email: "vashi@progenesis.in",
    services: ["IVF", "IUI", "Surrogacy"],
    coordinates: {
      lat: 19.0648,
      lng: 73.0031
    },
    timings: {
      weekdays: "9:00 AM - 7:00 PM",
      weekends: "10:00 AM - 2:00 PM"
    }
  },
  {
    id: 9,
    name: "Virar",
    city: "Palghar",
    state: "MAHARASHTRA",
    address: "Virar Medical Complex, Near Virar Station, Virar West 401303",
    image: "/images/Virar.png",
    phone: "+91 1234567898",
    email: "virar@progenesis.in",
    services: ["IVF", "Fertility Assessment", "Egg Freezing"],
    coordinates: {
      lat: 19.4597,
      lng: 72.8065
    },
    timings: {
      weekdays: "9:00 AM - 6:00 PM",
      weekends: "10:00 AM - 1:00 PM"
    }
  },
  {
    id: 10,
    name: "Kalyan",
    city: "Thane",
    state: "MAHARASHTRA",
    address: "Kalyan Health Clinic, Near Kalyan Station, Kalyan West 421301",
    image: "/images/Kalyan.png",
    phone: "+91 1234567899",
    email: "kalyan@progenesis.in",
    services: ["IVF", "IUI", "Fertility Preservation"],
    coordinates: {
      lat: 19.2424,
      lng: 73.1355
    },
    timings: {
      weekdays: "9:00 AM - 7:00 PM",
      weekends: "9:00 AM - 2:00 PM"
    }
  },
  {
    id: 11,
    name: "Panvel",
    city: "Navi Mumbai",
    state: "MAHARASHTRA",
    address: "Panvel Medical Center, Near Panvel Station, Panvel 410206",
    image: "/images/Panvel.png",
    phone: "+91 1234567800",
    email: "panvel@progenesis.in",
    services: ["IVF", "IUI", "Genetic Testing"],
    coordinates: {
      lat: 18.9894,
      lng: 73.1182
    },
    timings: {
      weekdays: "9:00 AM - 6:00 PM",
      weekends: "10:00 AM - 2:00 PM"
    }
  },
  {
    id: 12,
    name: "Solapur",
    city: "Solapur",
    state: "MAHARASHTRA",
    address: "Solapur Fertility Clinic, Near Old Bus Stand, Solapur 413001",
    image: "/images/Solapur.png",
    phone: "+91 1234567801",
    email: "solapur@progenesis.in",
    services: ["IVF", "Fertility Treatment", "Counseling"],
    coordinates: {
      lat: 17.6871,
      lng: 75.9064
    },
    timings: {
      weekdays: "9:00 AM - 7:00 PM",
      weekends: "9:00 AM - 1:00 PM"
    }
  },
  {
    id: 13,
    name: "Nagpur",
    city: "Nagpur",
    state: "MAHARASHTRA",
    address: "Nagpur Health Hub, Near Sitabuldi, Nagpur 440001",
    image: "/images/Nagpur.png",
    phone: "+91 1234567802",
    email: "nagpur@progenesis.in",
    services: ["IVF", "IUI", "Embryology"],
    coordinates: {
      lat: 21.1458,
      lng: 79.0882
    },
    timings: {
      weekdays: "9:00 AM - 8:00 PM",
      weekends: "9:00 AM - 3:00 PM"
    }
  },
  {
    id: 14,
    name: "Kolhapur",
    city: "Kolhapur",
    state: "MAHARASHTRA",
    address: "Kolhapur Fertility Center, Near Rankala Lake, Kolhapur 416001",
    image: "/images/Kolhapur.png",
    phone: "+91 1234567803",
    email: "kolhapur@progenesis.in",
    services: ["IVF", "IUI", "Surrogacy"],
    coordinates: {
      lat: 16.7041,
      lng: 74.2433
    },
    timings: {
      weekdays: "9:00 AM - 7:00 PM",
      weekends: "10:00 AM - 2:00 PM"
    }
  },
  {
    id: 15,
    name: "Amravati",
    city: "Amravati",
    state: "MAHARASHTRA",
    address: "Amravati Medical Plaza, Near Rajkamal Chowk, Amravati 444601",
    image: "/images/Amravati.png",
    phone: "+91 1234567804",
    email: "amravati@progenesis.in",
    services: ["IVF", "Fertility Assessment", "Genetic Testing"],
    coordinates: {
      lat: 20.9366,
      lng: 77.7666
    },
    timings: {
      weekdays: "9:00 AM - 6:00 PM",
      weekends: "10:00 AM - 1:00 PM"
    }
  },
  {
    id: 16,
    name: "Ahilyanagar",
    city: "Ahilyanagar",
    state: "MAHARASHTRA",
    address: "Ahilyanagar Health Clinic, Near Central Bus Stand, Ahilyanagar 414001",
    image: "/images/Ahilyanagar.png",
    phone: "+91 1234567805",
    email: "ahilyanagar@progenesis.in",
    services: ["IVF", "IUI", "Fertility Counseling"],
    coordinates: {
      lat: 19.0946,
      lng: 74.7402
    },
    timings: {
      weekdays: "9:00 AM - 7:00 PM",
      weekends: "9:00 AM - 2:00 PM"
    }
  }
];
interface CenterCardProps {
  name: string;
  address: string;
  image: string;
}

const CenterCard: React.FC<CenterCardProps> = ({ name, address, image }) => {
  const router = useRouter();
  
  const centerData = React.useMemo(() => {
    const center = centersData.find(center => center.name === name);
    if (!center) {
      console.warn(`Center data not found for: ${name}`);
      return {
        id: 0,
        name: name || 'Unknown Center',
        city: '',
        state: '',
        address: address || 'Address not available',
        image: image || '',
        timings: { weekdays: 'Not available', weekends: 'Not available' },
        services: [],
        coordinates: undefined
      };
    }
    return center;
  }, [name, address, image]);

  return (
    <div onClick={() => {
              router.push(`/centers/${centerData.id}`);
            }}
     className="flex flex-col md:flex-row gap-4 bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Image Container */}
      <div className="relative w-full md:w-[320px] h-[200px] md:h-[240px]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="flex flex-col justify-between p-4 md:p-6 w-full">
        {/* Center Name and Address */}
        <div>
          <h3 className="text-xl md:text-2xl font-manrope text-[#1656A5] mb-2">
            {name}
          </h3>
          <p className="text-[#6B7280] text-sm md:text-base leading-relaxed mb-4">
            {address}
          </p>

          {/* Timings */}
          <div className="text-sm text-gray-600 mb-4">
            <p><span className="font-medium">Weekdays:</span> {centerData.timings?.weekdays}</p>
            <p><span className="font-medium">Weekends:</span> {centerData.timings?.weekends}</p>
          </div>

          {/* Services */}
          {centerData.services && centerData.services.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-3 mt-4">
          <button 
            onClick={() => {
              if (centerData.coordinates) {
                window.open(`https://www.google.com/maps?q=${centerData.coordinates.lat},${centerData.coordinates.lng}`, '_blank');
              } else if (centerData.address) {
                // If no coordinates, try to open maps with the address
                window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(centerData.address)}`, '_blank');
              }
            }}
            disabled={!centerData.coordinates && !centerData.address}
            className={`h-10 px-4 text-sm font-medium flex items-center justify-center gap-2 ${
              !centerData.coordinates && !centerData.address
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-[#1656A5] hover:text-[#1656A5]/80 transition-colors'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {centerData.coordinates ? 'Get Location' : 'View on Map'}
          </button>
          <button 
          
            className="h-10 px-4 rounded-xl text-sm font-medium text-white bg-[#1656A5] hover:bg-[#1656A5]/90 transition-colors flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default CenterCard;
