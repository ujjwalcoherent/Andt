'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface PropositionProps {
  title: string
  isOpen: boolean
  onToggle: () => void
  children: React.ReactNode
}

function Proposition({ title, isOpen, onToggle, children }: PropositionProps) {
  return (
    <div className="border border-gray-200 rounded-lg mb-4">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-4 bg-white hover:bg-gray-50 rounded-lg transition-colors"
      >
        <span className="text-lg font-semibold text-black">{title}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="px-2 pb-4 bg-white rounded-b-lg">
          {children}
        </div>
      )}
    </div>
  )
}

const CELL = "border border-gray-300 px-3 py-2 text-sm text-black"
const HEADER_CUSTOMER = "bg-[#FFF8DC] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black"
const HEADER_CONTACT = "bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black"
const HEADER_PROCUREMENT = "bg-[#C8E6C9] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black"
const HEADER_DIGITAL = "bg-[#E1BEE7] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black"
const HEADER_FUTURE = "bg-[#BBDEFB] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black"
const HEADER_CMI = "bg-[#FFE0B2] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black"

const GROUP_CUSTOMER = "bg-[#E8C4A0] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black"
const GROUP_CONTACT = "bg-[#87CEEB] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black"
const GROUP_PROCUREMENT = "bg-[#A5D6A7] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black"
const GROUP_DIGITAL = "bg-[#CE93D8] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-white"
const GROUP_FUTURE = "bg-[#90CAF9] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black"
const GROUP_CMI = "bg-[#FFB74D] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black"

// Demo data for Proposition 1 (10 customers)
const prop1Data = [
  { name: 'Sonatrach Offshore Division', business: 'Offshore Operator', equipment: 'Cranes, Wire Ropes, Hoists', facility: 'Offshore Platform', capacity: '150 Tons/Hr', systems: '24' , contact: 'Ahmed Benali', role: 'Procurement Director', email: 'a.benali@sonatrach.dz', phone: '+213 555 012 345', linkedin: 'linkedin.com/in/ahmedbenali', website: 'www.sonatrach.com' },
  { name: 'Sasol Mining & Energy', business: 'Oil & Gas Company', equipment: 'Winches, Chain Slings, Shackles', facility: 'Onshore Yard', capacity: '200 Tons/Hr', systems: '38', contact: 'Johan van der Merwe', role: 'Operations Manager', email: 'j.vandermerwe@sasol.com', phone: '+27 11 441 3111', linkedin: 'linkedin.com/in/johanvdm', website: 'www.sasol.com' },
  { name: 'OCP Group', business: 'EPC Contractor', equipment: 'Synthetic Ropes, Capstans', facility: 'Port Terminal', capacity: '80 Tons/Hr', systems: '15', contact: 'Fatima El Mansouri', role: 'Chief Engineer', email: 'f.elmansouri@ocpgroup.ma', phone: '+212 661 234 567', linkedin: 'linkedin.com/in/fatimaelmansouri', website: 'www.ocpgroup.ma' },
  { name: 'Dangote Oil Refining', business: 'Offshore Operator', equipment: 'Hoists, Wire Rope Slings, Hooks', facility: 'Offshore Platform', capacity: '300 Tons/Hr', systems: '52', contact: 'Chidi Okonkwo', role: 'Plant Manager', email: 'c.okonkwo@dangote.com', phone: '+234 802 345 6789', linkedin: 'linkedin.com/in/chidiokonkwo', website: 'www.dangote.com' },
  { name: 'Transnet Port Terminals', business: 'Marine Services Provider', equipment: 'Cranes, Winches, Turnbuckles', facility: 'Port Terminal', capacity: '500 Tons/Hr', systems: '85', contact: 'Thabo Mkhize', role: 'Head of Equipment', email: 't.mkhize@transnet.net', phone: '+27 31 308 8000', linkedin: 'linkedin.com/in/thabomkhize', website: 'www.transnet.net' },
  { name: 'Sonangol E.P.', business: 'Offshore Operator', equipment: 'Wire Ropes, Shackles, Eyebolts', facility: 'Offshore Platform', capacity: '180 Tons/Hr', systems: '30', contact: 'Maria da Silva', role: 'Procurement Head', email: 'm.dasilva@sonangol.co.ao', phone: '+244 922 345 678', linkedin: 'linkedin.com/in/mariadasilva', website: 'www.sonangol.co.ao' },
  { name: 'Egyptian Drilling Company', business: 'EPC Contractor', equipment: 'Hoists, Capstans, Master Links', facility: 'Shipyard', capacity: '120 Tons/Hr', systems: '22', contact: 'Hassan El-Sayed', role: 'Technical Director', email: 'h.elsayed@egydrill.com', phone: '+20 100 234 5678', linkedin: 'linkedin.com/in/hassanelsayed', website: 'www.egydrill.com' },
  { name: 'Sapref (Shell/BP JV)', business: 'Oil & Gas Company', equipment: 'Chain Slings, Wire Rope Slings', facility: 'Onshore Yard', capacity: '250 Tons/Hr', systems: '44', contact: 'Pieter Botha', role: 'Maintenance Manager', email: 'p.botha@sapref.com', phone: '+27 31 902 5000', linkedin: 'linkedin.com/in/pieterbotha', website: 'www.sapref.com' },
  { name: 'NNPC Offshore', business: 'Offshore Operator', equipment: 'Winches, Synthetic Ropes, Hooks', facility: 'Offshore Platform', capacity: '220 Tons/Hr', systems: '36', contact: 'Aminu Ibrahim', role: 'Supply Chain Lead', email: 'a.ibrahim@nnpc.gov.ng', phone: '+234 803 456 7890', linkedin: 'linkedin.com/in/aminuibrahim', website: 'www.nnpc.gov.ng' },
  { name: 'Maersk Drilling Africa', business: 'Marine Services Provider', equipment: 'Cranes, Hoists, Turnbuckles, Eyebolts', facility: 'Shipyard', capacity: '400 Tons/Hr', systems: '65', contact: 'Lars Andersen', role: 'Regional Director', email: 'l.andersen@maersk.com', phone: '+45 33 63 3363', linkedin: 'linkedin.com/in/larsandersen', website: 'www.maersk.com' },
]

// Demo data for Proposition 2 & 3 (12 customers)
const prop2Data = [
  ...prop1Data,
  { name: 'TotalEnergies Africa', business: 'Oil & Gas Company', equipment: 'Wire Ropes, Cranes, Shackles', facility: 'Offshore Platform', capacity: '350 Tons/Hr', systems: '58', contact: 'Jean-Pierre Duval', role: 'Asset Manager', email: 'jp.duval@totalenergies.com', phone: '+33 1 47 44 4546', linkedin: 'linkedin.com/in/jpduval', website: 'www.totalenergies.com' },
  { name: 'Nacala Logistics Corridor', business: 'Marine Services Provider', equipment: 'Winches, Chain Slings, Capstans', facility: 'Port Terminal', capacity: '160 Tons/Hr', systems: '28', contact: 'Carlos Machel', role: 'Port Operations Lead', email: 'c.machel@nacalalogistics.com', phone: '+258 84 567 8901', linkedin: 'linkedin.com/in/carlosmachel', website: 'www.nacalalogistics.com' },
]

// Additional fields for Proposition 2
const prop2Extra = [
  { budget: '$2.4M', model: 'OEM Direct', leadTime: '8', replaceCycle: '7' },
  { budget: '$3.8M', model: 'Distributor', leadTime: '12', replaceCycle: '5' },
  { budget: '$1.1M', model: 'EPC Contractor', leadTime: '6', replaceCycle: '8' },
  { budget: '$5.2M', model: 'OEM Direct', leadTime: '10', replaceCycle: '6' },
  { budget: '$8.5M', model: 'OEM Direct', leadTime: '14', replaceCycle: '4' },
  { budget: '$2.9M', model: 'Distributor', leadTime: '9', replaceCycle: '6' },
  { budget: '$1.8M', model: 'EPC Contractor', leadTime: '7', replaceCycle: '7' },
  { budget: '$4.1M', model: 'Distributor', leadTime: '11', replaceCycle: '5' },
  { budget: '$3.5M', model: 'OEM Direct', leadTime: '10', replaceCycle: '6' },
  { budget: '$6.7M', model: 'OEM Direct', leadTime: '16', replaceCycle: '4' },
  { budget: '$4.8M', model: 'Distributor', leadTime: '12', replaceCycle: '5' },
  { budget: '$2.2M', model: 'EPC Contractor', leadTime: '8', replaceCycle: '7' },
]

// Additional fields for Proposition 3
const prop3Extra = [
  { automation: 'Semi Automatic', plcScada: '45%', smart: 'Yes', predictive: 'Medium', remote: 'Yes', expansion: '15%', newPurchases: '8 units', newAreas: 'Deepwater drilling', newFacility: 'No', benchmark: 'High potential - strategic account', notes: 'Key player in Algerian offshore sector' },
  { automation: 'Manual', plcScada: '20%', smart: 'No', predictive: 'Low', remote: 'No', expansion: '25%', newPurchases: '12 units', newAreas: 'Coal-to-liquids expansion', newFacility: 'Yes', benchmark: 'High potential - expanding operations', notes: 'Diversifying into renewable energy' },
  { automation: 'Semi Automatic', plcScada: '35%', smart: 'No', predictive: 'Medium', remote: 'Yes', expansion: '10%', newPurchases: '5 units', newAreas: 'Port automation', newFacility: 'No', benchmark: 'Medium potential - niche operator', notes: 'Focus on phosphate export terminals' },
  { automation: 'Fully', plcScada: '70%', smart: 'Yes', predictive: 'Medium', remote: 'Yes', expansion: '30%', newPurchases: '20 units', newAreas: 'Deepwater projects', newFacility: 'Yes', benchmark: 'High potential - major investment pipeline', notes: 'Largest private refinery in Africa' },
  { automation: 'Fully', plcScada: '80%', smart: 'Yes', predictive: 'Medium', remote: 'Yes', expansion: '20%', newPurchases: '30 units', newAreas: 'Container terminal expansion', newFacility: 'Yes', benchmark: 'High potential - government backed', notes: 'Modernizing all port infrastructure' },
  { automation: 'Semi Automatic', plcScada: '30%', smart: 'No', predictive: 'Low', remote: 'No', expansion: '12%', newPurchases: '6 units', newAreas: 'Pre-salt exploration', newFacility: 'No', benchmark: 'Medium potential - budget constraints', notes: 'Angolan national oil company' },
  { automation: 'Semi Automatic', plcScada: '50%', smart: 'Yes', predictive: 'Medium', remote: 'Yes', expansion: '18%', newPurchases: '10 units', newAreas: 'Mediterranean deepwater', newFacility: 'No', benchmark: 'High potential - technical capability', notes: 'Strong technical team, open to partnerships' },
  { automation: 'Manual', plcScada: '15%', smart: 'No', predictive: 'Low', remote: 'No', expansion: '8%', newPurchases: '4 units', newAreas: 'None planned', newFacility: 'No', benchmark: 'Medium potential - aging equipment', notes: 'Equipment replacement cycle due 2027' },
  { automation: 'Semi Automatic', plcScada: '40%', smart: 'Yes', predictive: 'Medium', remote: 'Yes', expansion: '22%', newPurchases: '15 units', newAreas: 'Deepwater Gulf of Guinea', newFacility: 'Yes', benchmark: 'High potential - rapid growth', notes: 'Expanding offshore fleet significantly' },
  { automation: 'Fully', plcScada: '85%', smart: 'Yes', predictive: 'Medium', remote: 'Yes', expansion: '15%', newPurchases: '18 units', newAreas: 'Offshore wind (pilot)', newFacility: 'No', benchmark: 'High potential - premium client', notes: 'Global standards, strong procurement process' },
  { automation: 'Fully', plcScada: '75%', smart: 'Yes', predictive: 'Medium', remote: 'Yes', expansion: '28%', newPurchases: '22 units', newAreas: 'Deepwater West Africa', newFacility: 'Yes', benchmark: 'High potential - expansion phase', notes: 'Major capex cycle 2026-2030' },
  { automation: 'Semi Automatic', plcScada: '25%', smart: 'No', predictive: 'Low', remote: 'No', expansion: '10%', newPurchases: '7 units', newAreas: 'LNG terminal support', newFacility: 'No', benchmark: 'Medium potential - niche logistics', notes: 'Growing Mozambique corridor operations' },
]

interface CustomerIntelligenceDatabaseProps {
  title?: string
  height?: number
}

export default function CustomerIntelligenceDatabase({ title }: CustomerIntelligenceDatabaseProps) {
  const [openProposition, setOpenProposition] = useState<number | null>(1)

  const toggleProposition = (num: number) => {
    setOpenProposition(openProposition === num ? null : num)
  }

  const renderProposition1Table = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th colSpan={6} className={GROUP_CUSTOMER}>Customer Information</th>
            <th colSpan={6} className={GROUP_CONTACT}>Contact Details</th>
          </tr>
          <tr>
            <th className={`${HEADER_CUSTOMER} min-w-[150px]`}>Customer Name/Company Name</th>
            <th className={`${HEADER_CUSTOMER} min-w-[180px]`}>
              <div>Type of Business</div>
              <div className="font-normal text-[10px] text-gray-600">(Offshore Operator, Oil & Gas Company, EPC Contractor, Marine Services Provider)</div>
            </th>
            <th className={`${HEADER_CUSTOMER} min-w-[170px]`}>
              <div>Primary Equipment Type</div>
              <div className="font-normal text-[10px] text-gray-600">(Cranes, Hoists, Winches, Lifting Accessories, Offshore)</div>
            </th>
            <th className={`${HEADER_CUSTOMER} min-w-[160px]`}>
              <div>Facility Type</div>
              <div className="font-normal text-[10px] text-gray-600">(Offshore Platform, Shipyard, Port Terminal, Onshore Yard)</div>
            </th>
            <th className={`${HEADER_CUSTOMER} min-w-[150px]`}>
              <div>Installed Lifting Capacity</div>
              <div className="font-normal text-[10px] text-gray-600">(Tons per Hour / Units)</div>
            </th>
            <th className={`${HEADER_CUSTOMER} min-w-[140px]`}>Number of Lifting Systems/Equipment</th>
            <th className={`${HEADER_CONTACT} min-w-[130px]`}>Key Contact Person</th>
            <th className={`${HEADER_CONTACT} min-w-[120px]`}>Designation/Role</th>
            <th className={`${HEADER_CONTACT} min-w-[130px]`}>Email Address</th>
            <th className={`${HEADER_CONTACT} min-w-[140px]`}>Phone/WhatsApp Number</th>
            <th className={`${HEADER_CONTACT} min-w-[120px]`}>LinkedIn Profile</th>
            <th className={`${HEADER_CONTACT} min-w-[110px]`}>Website URL</th>
          </tr>
        </thead>
        <tbody>
          {prop1Data.map((c, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className={`${CELL} font-medium`}>{c.name}</td>
              <td className={CELL}>{c.business}</td>
              <td className={CELL}>{c.equipment}</td>
              <td className={CELL}>{c.facility}</td>
              <td className={CELL}>{c.capacity}</td>
              <td className={CELL}>{c.systems}</td>
              <td className={CELL}>{c.contact}</td>
              <td className={CELL}>{c.role}</td>
              <td className={CELL}>{c.email}</td>
              <td className={CELL}>{c.phone}</td>
              <td className={CELL}>{c.linkedin}</td>
              <td className={CELL}>{c.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  const renderProposition2Table = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th colSpan={6} className={GROUP_CUSTOMER}>Customer Information</th>
            <th colSpan={6} className={GROUP_CONTACT}>Contact Details</th>
            <th colSpan={4} className={GROUP_PROCUREMENT}>Procurement & Purchase Metrics</th>
          </tr>
          <tr>
            <th className={`${HEADER_CUSTOMER} min-w-[150px]`}>Customer Name/Company Name</th>
            <th className={`${HEADER_CUSTOMER} min-w-[180px]`}>
              <div>Type of Business</div>
              <div className="font-normal text-[10px] text-gray-600">(Offshore Operator, Oil & Gas Company, EPC Contractor, Marine Services Provider)</div>
            </th>
            <th className={`${HEADER_CUSTOMER} min-w-[170px]`}>
              <div>Primary Equipment Type</div>
              <div className="font-normal text-[10px] text-gray-600">(Cranes, Hoists, Winches, Lifting Accessories, Offshore)</div>
            </th>
            <th className={`${HEADER_CUSTOMER} min-w-[160px]`}>
              <div>Facility Type</div>
              <div className="font-normal text-[10px] text-gray-600">(Offshore Platform, Shipyard, Port Terminal, Onshore Yard)</div>
            </th>
            <th className={`${HEADER_CUSTOMER} min-w-[150px]`}>
              <div>Installed Lifting Capacity</div>
              <div className="font-normal text-[10px] text-gray-600">(Tons per Hour / Units)</div>
            </th>
            <th className={`${HEADER_CUSTOMER} min-w-[140px]`}>Number of Lifting Systems/Equipment</th>
            <th className={`${HEADER_CONTACT} min-w-[130px]`}>Key Contact Person</th>
            <th className={`${HEADER_CONTACT} min-w-[120px]`}>Designation/Role</th>
            <th className={`${HEADER_CONTACT} min-w-[130px]`}>Email Address</th>
            <th className={`${HEADER_CONTACT} min-w-[140px]`}>Phone/WhatsApp Number</th>
            <th className={`${HEADER_CONTACT} min-w-[120px]`}>LinkedIn Profile</th>
            <th className={`${HEADER_CONTACT} min-w-[110px]`}>Website URL</th>
            <th className={`${HEADER_PROCUREMENT} min-w-[160px]`}>Annual Equipment Procurement Budget (US$)</th>
            <th className={`${HEADER_PROCUREMENT} min-w-[180px]`}>
              <div>Preferred Procurement Model</div>
              <div className="font-normal text-[10px] text-gray-600">(OEM Direct, Distributor, EPC Contractor)</div>
            </th>
            <th className={`${HEADER_PROCUREMENT} min-w-[150px]`}>Average Procurement Lead Time (Weeks)</th>
            <th className={`${HEADER_PROCUREMENT} min-w-[150px]`}>Replacement Cycle of Equipment (Years)</th>
          </tr>
        </thead>
        <tbody>
          {prop2Data.map((c, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className={`${CELL} font-medium`}>{c.name}</td>
              <td className={CELL}>{c.business}</td>
              <td className={CELL}>{c.equipment}</td>
              <td className={CELL}>{c.facility}</td>
              <td className={CELL}>{c.capacity}</td>
              <td className={CELL}>{c.systems}</td>
              <td className={CELL}>{c.contact}</td>
              <td className={CELL}>{c.role}</td>
              <td className={CELL}>{c.email}</td>
              <td className={CELL}>{c.phone}</td>
              <td className={CELL}>{c.linkedin}</td>
              <td className={CELL}>{c.website}</td>
              <td className={CELL}>{prop2Extra[i].budget}</td>
              <td className={CELL}>{prop2Extra[i].model}</td>
              <td className={CELL}>{prop2Extra[i].leadTime}</td>
              <td className={CELL}>{prop2Extra[i].replaceCycle}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  const renderProposition3Table = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th colSpan={6} className={GROUP_CUSTOMER}>Customer Information</th>
            <th colSpan={6} className={GROUP_CONTACT}>Contact Details</th>
            <th colSpan={4} className={GROUP_PROCUREMENT}>Procurement & Purchase Metrics</th>
            <th colSpan={5} className={GROUP_DIGITAL}>Digital & Technology Adoption Metrics</th>
            <th colSpan={4} className={GROUP_FUTURE}>Future Demand & Expansion Metrics</th>
            <th colSpan={2} className={GROUP_CMI}>CMI Insights</th>
          </tr>
          <tr>
            {/* Customer Information */}
            <th className={`${HEADER_CUSTOMER} min-w-[150px]`}>Customer Name/Company Name</th>
            <th className={`${HEADER_CUSTOMER} min-w-[180px]`}>
              <div>Type of Business</div>
              <div className="font-normal text-[10px] text-gray-600">(Offshore Operator, Oil & Gas Company, EPC Contractor, Marine Services Provider)</div>
            </th>
            <th className={`${HEADER_CUSTOMER} min-w-[170px]`}>
              <div>Primary Equipment Type</div>
              <div className="font-normal text-[10px] text-gray-600">(Cranes, Hoists, Winches, Lifting Accessories, Offshore)</div>
            </th>
            <th className={`${HEADER_CUSTOMER} min-w-[160px]`}>
              <div>Facility Type</div>
              <div className="font-normal text-[10px] text-gray-600">(Offshore Platform, Shipyard, Port Terminal, Onshore Yard)</div>
            </th>
            <th className={`${HEADER_CUSTOMER} min-w-[150px]`}>
              <div>Installed Lifting Capacity</div>
              <div className="font-normal text-[10px] text-gray-600">(Tons per Hour / Units)</div>
            </th>
            <th className={`${HEADER_CUSTOMER} min-w-[140px]`}>Number of Lifting Systems/Equipment</th>
            {/* Contact Details */}
            <th className={`${HEADER_CONTACT} min-w-[130px]`}>Key Contact Person</th>
            <th className={`${HEADER_CONTACT} min-w-[120px]`}>Designation/Role</th>
            <th className={`${HEADER_CONTACT} min-w-[130px]`}>Email Address</th>
            <th className={`${HEADER_CONTACT} min-w-[140px]`}>Phone/WhatsApp Number</th>
            <th className={`${HEADER_CONTACT} min-w-[120px]`}>LinkedIn Profile</th>
            <th className={`${HEADER_CONTACT} min-w-[110px]`}>Website URL</th>
            {/* Procurement & Purchase Metrics */}
            <th className={`${HEADER_PROCUREMENT} min-w-[160px]`}>Annual Equipment Procurement Budget (US$)</th>
            <th className={`${HEADER_PROCUREMENT} min-w-[180px]`}>
              <div>Preferred Procurement Model</div>
              <div className="font-normal text-[10px] text-gray-600">(OEM Direct, Distributor, EPC Contractor)</div>
            </th>
            <th className={`${HEADER_PROCUREMENT} min-w-[150px]`}>Average Procurement Lead Time (Weeks)</th>
            <th className={`${HEADER_PROCUREMENT} min-w-[150px]`}>Replacement Cycle of Equipment (Years)</th>
            {/* Digital & Technology Adoption Metrics */}
            <th className={`${HEADER_DIGITAL} min-w-[150px]`}>
              <div>Level of Automation</div>
              <div className="font-normal text-[10px] text-gray-600">(Manual, Semi Automatic, Fully)</div>
            </th>
            <th className={`${HEADER_DIGITAL} min-w-[170px]`}>Percentage of Equipment with PLC/SCADA Integration</th>
            <th className={`${HEADER_DIGITAL} min-w-[160px]`}>
              <div>Use of Smart/Connected Equipment</div>
              <div className="font-normal text-[10px] text-gray-600">(Yes or No)</div>
            </th>
            <th className={`${HEADER_DIGITAL} min-w-[160px]`}>
              <div>Predictive Maintenance Tools Adoption</div>
              <div className="font-normal text-[10px] text-gray-600">(Low, Medium)</div>
            </th>
            <th className={`${HEADER_DIGITAL} min-w-[170px]`}>
              <div>Remote Monitoring and Diagnostics Capability</div>
              <div className="font-normal text-[10px] text-gray-600">(Yes or No)</div>
            </th>
            {/* Future Demand & Expansion Metrics */}
            <th className={`${HEADER_FUTURE} min-w-[160px]`}>Planned Capacity Expansion in Next 3 Years (%)</th>
            <th className={`${HEADER_FUTURE} min-w-[160px]`}>Expected New Equipment Purchases in Next 3 Years</th>
            <th className={`${HEADER_FUTURE} min-w-[160px]`}>
              <div>New Application Areas Planned</div>
              <div className="font-normal text-[10px] text-gray-600">(Deepwater projects)</div>
            </th>
            <th className={`${HEADER_FUTURE} min-w-[150px]`}>
              <div>New Facility Construction Planned</div>
              <div className="font-normal text-[10px] text-gray-600">(Yes or No)</div>
            </th>
            {/* CMI Insights */}
            <th className={`${HEADER_CMI} min-w-[170px]`}>
              <div>Customer Benchmarking Summary</div>
              <div className="font-normal text-[10px] text-gray-600">(Potential Customers)</div>
            </th>
            <th className={`${HEADER_CMI} min-w-[170px]`}>Additional Comments/Notes By CMI Team</th>
          </tr>
        </thead>
        <tbody>
          {prop2Data.map((c, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className={`${CELL} font-medium`}>{c.name}</td>
              <td className={CELL}>{c.business}</td>
              <td className={CELL}>{c.equipment}</td>
              <td className={CELL}>{c.facility}</td>
              <td className={CELL}>{c.capacity}</td>
              <td className={CELL}>{c.systems}</td>
              <td className={CELL}>{c.contact}</td>
              <td className={CELL}>{c.role}</td>
              <td className={CELL}>{c.email}</td>
              <td className={CELL}>{c.phone}</td>
              <td className={CELL}>{c.linkedin}</td>
              <td className={CELL}>{c.website}</td>
              <td className={CELL}>{prop2Extra[i].budget}</td>
              <td className={CELL}>{prop2Extra[i].model}</td>
              <td className={CELL}>{prop2Extra[i].leadTime}</td>
              <td className={CELL}>{prop2Extra[i].replaceCycle}</td>
              <td className={CELL}>{prop3Extra[i].automation}</td>
              <td className={CELL}>{prop3Extra[i].plcScada}</td>
              <td className={CELL}>{prop3Extra[i].smart}</td>
              <td className={CELL}>{prop3Extra[i].predictive}</td>
              <td className={CELL}>{prop3Extra[i].remote}</td>
              <td className={CELL}>{prop3Extra[i].expansion}</td>
              <td className={CELL}>{prop3Extra[i].newPurchases}</td>
              <td className={CELL}>{prop3Extra[i].newAreas}</td>
              <td className={CELL}>{prop3Extra[i].newFacility}</td>
              <td className={CELL}>{prop3Extra[i].benchmark}</td>
              <td className={CELL}>{prop3Extra[i].notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  return (
    <div className="w-full">
      <h2 className="text-xl font-bold text-black mb-6">Customer Intelligence Database</h2>

      <Proposition
        title="Proposition 1 - Basic"
        isOpen={openProposition === 1}
        onToggle={() => toggleProposition(1)}
      >
        {renderProposition1Table()}
      </Proposition>

      <Proposition
        title="Proposition 2 - Advanced"
        isOpen={openProposition === 2}
        onToggle={() => toggleProposition(2)}
      >
        {renderProposition2Table()}
      </Proposition>

      <Proposition
        title="Proposition 3 - Premium"
        isOpen={openProposition === 3}
        onToggle={() => toggleProposition(3)}
      >
        {renderProposition3Table()}
      </Proposition>
    </div>
  )
}
