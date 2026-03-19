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

// Demo data for Proposition 1 (10 customers - Angola)
const prop1Data = [
  { name: 'Sonangol E.P.', business: 'Offshore Operator', equipment: 'Wire Ropes, Shackles, Eyebolts', facility: 'Offshore Platform', capacity: '180 Tons/Hr', systems: '30', contact: 'Maria da Silva', role: 'Procurement Head', email: 'm.dasilva@sonangol.co.ao', phone: '+244 922 345 678', linkedin: 'linkedin.com/in/mariadasilva', website: 'www.sonangol.co.ao' },
  { name: 'Sonangol Logistics', business: 'Marine Services Provider', equipment: 'Cranes, Winches, Turnbuckles', facility: 'Port Terminal', capacity: '320 Tons/Hr', systems: '54', contact: 'Pedro Neto', role: 'Head of Logistics', email: 'p.neto@sonangol.co.ao', phone: '+244 923 456 789', linkedin: 'linkedin.com/in/pedroneto', website: 'www.sonangol.co.ao' },
  { name: 'TotalEnergies Angola', business: 'Offshore Operator', equipment: 'Hoists, Wire Rope Slings, Hooks', facility: 'Offshore Platform', capacity: '280 Tons/Hr', systems: '46', contact: 'Jean-Luc Moreau', role: 'Asset Manager', email: 'jl.moreau@totalenergies.com', phone: '+244 924 567 890', linkedin: 'linkedin.com/in/jlmoreau', website: 'www.totalenergies.com' },
  { name: 'BP Angola (Block 18)', business: 'Oil & Gas Company', equipment: 'Winches, Chain Slings, Capstans', facility: 'Offshore Platform', capacity: '350 Tons/Hr', systems: '62', contact: 'Simon Adeyemi', role: 'Operations Director', email: 's.adeyemi@bp.com', phone: '+244 925 678 901', linkedin: 'linkedin.com/in/simonadeyemi', website: 'www.bp.com' },
  { name: 'Eni Angola S.p.A.', business: 'Offshore Operator', equipment: 'Synthetic Ropes, Shackles, Master Links', facility: 'Offshore Platform', capacity: '210 Tons/Hr', systems: '38', contact: 'Giulia Ricci', role: 'Technical Manager', email: 'g.ricci@eni.com', phone: '+244 926 789 012', linkedin: 'linkedin.com/in/giuliaricci', website: 'www.eni.com' },
  { name: 'Chevron Angola (Cabinda)', business: 'Oil & Gas Company', equipment: 'Wire Ropes, Hoists, Eyebolts', facility: 'Offshore Platform', capacity: '400 Tons/Hr', systems: '70', contact: 'James Okwu', role: 'Supply Chain Manager', email: 'j.okwu@chevron.com', phone: '+244 927 890 123', linkedin: 'linkedin.com/in/jamesokwu', website: 'www.chevron.com' },
  { name: 'Porto de Luanda Authority', business: 'Marine Services Provider', equipment: 'Cranes, Turnbuckles, Wire Rope Slings', facility: 'Port Terminal', capacity: '500 Tons/Hr', systems: '85', contact: 'António Ferreira', role: 'Port Equipment Director', email: 'a.ferreira@portoLuanda.ao', phone: '+244 222 310 000', linkedin: 'linkedin.com/in/antonioferreira', website: 'www.portoluanda.ao' },
  { name: 'Subsea 7 Angola', business: 'EPC Contractor', equipment: 'Capstans, Hoists, Chain Slings', facility: 'Shipyard', capacity: '150 Tons/Hr', systems: '28', contact: 'Kwame Asante', role: 'Project Director', email: 'k.asante@subsea7.com', phone: '+244 928 901 234', linkedin: 'linkedin.com/in/kwameasante', website: 'www.subsea7.com' },
  { name: 'Saipem Angola', business: 'EPC Contractor', equipment: 'Wire Ropes, Winches, Hooks', facility: 'Shipyard', capacity: '190 Tons/Hr', systems: '33', contact: 'Marco Bianchi', role: 'Construction Manager', email: 'm.bianchi@saipem.com', phone: '+244 929 012 345', linkedin: 'linkedin.com/in/marcobianchi', website: 'www.saipem.com' },
  { name: 'Angola LNG (Soyo)', business: 'Oil & Gas Company', equipment: 'Hoists, Eyebolts, Master Links, Shackles', facility: 'Onshore Yard', capacity: '240 Tons/Hr', systems: '41', contact: 'Carlos Mbemba', role: 'Maintenance Lead', email: 'c.mbemba@angolalng.com', phone: '+244 930 123 456', linkedin: 'linkedin.com/in/carlosmbemba', website: 'www.angolalng.com' },
]

// Demo data for Proposition 2 & 3 (12 customers - Angola)
const prop2Data = [
  ...prop1Data,
  { name: 'ExxonMobil Angola', business: 'Offshore Operator', equipment: 'Wire Ropes, Cranes, Shackles', facility: 'Offshore Platform', capacity: '380 Tons/Hr', systems: '65', contact: 'David Nzinga', role: 'Procurement Director', email: 'd.nzinga@exxonmobil.com', phone: '+244 931 234 567', linkedin: 'linkedin.com/in/davidnzinga', website: 'www.exxonmobil.com' },
  { name: 'Cabinda Gulf Oil Company', business: 'Oil & Gas Company', equipment: 'Winches, Chain Slings, Capstans', facility: 'Offshore Platform', capacity: '165 Tons/Hr', systems: '29', contact: 'Filomena Teixeira', role: 'Logistics Manager', email: 'f.teixeira@cabindagulf.com', phone: '+244 932 345 678', linkedin: 'linkedin.com/in/filomenateixeira', website: 'www.cabindagulf.com' },
]

// Additional fields for Proposition 2 (Angola)
const prop2Extra = [
  { budget: '$2.9M', model: 'OEM Direct', leadTime: '9', replaceCycle: '6' },
  { budget: '$4.2M', model: 'OEM Direct', leadTime: '11', replaceCycle: '5' },
  { budget: '$5.1M', model: 'Distributor', leadTime: '10', replaceCycle: '6' },
  { budget: '$7.3M', model: 'OEM Direct', leadTime: '14', replaceCycle: '4' },
  { budget: '$3.6M', model: 'Distributor', leadTime: '9', replaceCycle: '7' },
  { budget: '$8.2M', model: 'OEM Direct', leadTime: '16', replaceCycle: '4' },
  { budget: '$6.5M', model: 'OEM Direct', leadTime: '12', replaceCycle: '5' },
  { budget: '$2.1M', model: 'EPC Contractor', leadTime: '7', replaceCycle: '8' },
  { budget: '$3.3M', model: 'EPC Contractor', leadTime: '8', replaceCycle: '7' },
  { budget: '$4.7M', model: 'Distributor', leadTime: '10', replaceCycle: '5' },
  { budget: '$9.1M', model: 'OEM Direct', leadTime: '18', replaceCycle: '4' },
  { budget: '$2.5M', model: 'Distributor', leadTime: '8', replaceCycle: '6' },
]

// Additional fields for Proposition 3 (Angola)
const prop3Extra = [
  { automation: 'Semi Automatic', plcScada: '30%', smart: 'No', predictive: 'Low', remote: 'No', expansion: '12%', newPurchases: '6 units', newAreas: 'Pre-salt deepwater expansion', newFacility: 'No', benchmark: 'Medium potential - budget constraints', notes: 'Angolan national oil company, key account' },
  { automation: 'Fully', plcScada: '75%', smart: 'Yes', predictive: 'Medium', remote: 'Yes', expansion: '20%', newPurchases: '22 units', newAreas: 'Luanda port modernization', newFacility: 'Yes', benchmark: 'High potential - government backed', notes: 'Expanding logistics capacity 2026-2029' },
  { automation: 'Fully', plcScada: '80%', smart: 'Yes', predictive: 'Medium', remote: 'Yes', expansion: '25%', newPurchases: '18 units', newAreas: 'Ultra-deepwater Block 20', newFacility: 'Yes', benchmark: 'High potential - major capex cycle', notes: 'Strong HSSE requirements, global standards' },
  { automation: 'Fully', plcScada: '85%', smart: 'Yes', predictive: 'Medium', remote: 'Yes', expansion: '30%', newPurchases: '28 units', newAreas: 'Block 31 deepwater phase 2', newFacility: 'Yes', benchmark: 'High potential - premium client', notes: 'Major capex cycle 2026-2031' },
  { automation: 'Semi Automatic', plcScada: '50%', smart: 'Yes', predictive: 'Medium', remote: 'Yes', expansion: '18%', newPurchases: '12 units', newAreas: 'Block 15/06 expansion', newFacility: 'No', benchmark: 'High potential - technical capability', notes: 'Italian standards, open to local partnerships' },
  { automation: 'Fully', plcScada: '90%', smart: 'Yes', predictive: 'Medium', remote: 'Yes', expansion: '28%', newPurchases: '30 units', newAreas: 'Deepwater Cabinda blocks', newFacility: 'Yes', benchmark: 'High potential - largest operator', notes: 'Longest running operator in Angola' },
  { automation: 'Fully', plcScada: '85%', smart: 'Yes', predictive: 'Medium', remote: 'Yes', expansion: '22%', newPurchases: '35 units', newAreas: 'Port expansion Phase 3', newFacility: 'Yes', benchmark: 'High potential - infrastructure modernization', notes: 'National port authority, strategic partner' },
  { automation: 'Semi Automatic', plcScada: '45%', smart: 'Yes', predictive: 'Medium', remote: 'Yes', expansion: '15%', newPurchases: '10 units', newAreas: 'Subsea pipeline installation', newFacility: 'No', benchmark: 'High potential - technical specialist', notes: 'Strong project pipeline through 2030' },
  { automation: 'Semi Automatic', plcScada: '40%', smart: 'No', predictive: 'Low', remote: 'No', expansion: '12%', newPurchases: '8 units', newAreas: 'FPSO construction support', newFacility: 'No', benchmark: 'Medium potential - project-based', notes: 'Active in Block 15 and 17 projects' },
  { automation: 'Manual', plcScada: '20%', smart: 'No', predictive: 'Low', remote: 'No', expansion: '10%', newPurchases: '5 units', newAreas: 'LNG train expansion', newFacility: 'No', benchmark: 'Medium potential - expansion pending', notes: 'Equipment replacement cycle due 2027' },
  { automation: 'Fully', plcScada: '88%', smart: 'Yes', predictive: 'Medium', remote: 'Yes', expansion: '32%', newPurchases: '25 units', newAreas: 'Block 45 deepwater exploration', newFacility: 'Yes', benchmark: 'High potential - strategic expansion', notes: 'Significant new block investments planned' },
  { automation: 'Semi Automatic', plcScada: '35%', smart: 'No', predictive: 'Low', remote: 'No', expansion: '8%', newPurchases: '4 units', newAreas: 'Cabinda shallow water', newFacility: 'No', benchmark: 'Medium potential - mature field', notes: 'Legacy operator with modernization plans' },
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
