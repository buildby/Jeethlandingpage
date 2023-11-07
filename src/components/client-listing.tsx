interface Client {
  vendor: string;
  clientImage: string;
  clientName: string;
  rating: number;
  avgFare: number;
  vehicleTypes: {
    type: string;
    quantity: number;
  }[]
}

const clientData: Client[] = [
  {
    vendor: "4 Wheel Travels",
    clientImage: "home/clients/ibm.svg",
    clientName: "IBM",
    rating: 3.8,
    avgFare: 560,
    vehicleTypes: [
      {
        type: "Sedan",
        quantity: 23
      },
      {
        type: "SUV",
        quantity: 14
      }
    ]
  },
  {
    vendor: "Sreenija Tours and Travels",
    clientImage: "home/clients/hcl.svg",
    clientName: "HCL",
    rating: 2.5,
    avgFare: 620,
    vehicleTypes: [
      {
        type: "Sedan",
        quantity: 13
      },
      {
        type: "SUV",
        quantity: 10
      }
    ]
  },
  {
    vendor: "Shyam Salasar Logistics",
    clientImage: "home/clients/google.svg",
    clientName: "Google",
    rating: 4.2,
    avgFare: 650,
    vehicleTypes: [
      {
        type: "Sedan",
        quantity: 22
      },
      {
        type: "SUV",
        quantity: 13
      }
    ]
  },
  {
    vendor: "4 Wheel Travels",
    clientImage: "home/clients/ibm.svg",
    clientName: "IBM",
    rating: 3.8,
    avgFare: 560,
    vehicleTypes: [
      {
        type: "Sedan",
        quantity: 23
      },
      {
        type: "SUV",
        quantity: 14
      }
    ]
  },
  {
    vendor: "Sreenija Tours and Travels",
    clientImage: "home/clients/hcl.svg",
    clientName: "HCL",
    rating: 2.5,
    avgFare: 620,
    vehicleTypes: [
      {
        type: "Sedan",
        quantity: 13
      },
      {
        type: "SUV",
        quantity: 10
      }
    ]
  },
  {
    vendor: "4 Wheel Travels",
    clientImage: "home/clients/microsoft.svg",
    clientName: "Microsoft",
    rating: 4.2,
    avgFare: 620,
    vehicleTypes: [
      {
        type: "Sedan",
        quantity: 13
      },
      {
        type: "SUV",
        quantity: 10
      }
    ]
  },
]

export const ClientListing = () => {
  return (
    <div className="rounded-xl bg-white p-4 md:p-8 md:w-[90%] mx-auto">
      <h4 className="text-primary text-xl pb-8 font-bold text-center">Glimpse of our marketplace.</h4>

      <div className="grid md:grid-cols-2 gap-4 md:gap-8">
        {clientData.map((client) => (ClientCard(client)))}
      </div>
    </div>
  )
}

export const ClientCard = (clientData: Client) => {
  return (
    <div className="p-2 flex items-center justify-between text-secondary rounded border border-gray-100 hover:bg-primary hover:text-white group">
      <img className="w-10 md:w-16 mr-2 md:mr-4" src={clientData.clientImage} alt={clientData.clientName} />

      <div className="flex-1 text-sm">
        <p className="mb-2 w-40 md:w-48 truncate">Vendor: <b>{clientData.vendor}</b></p>
        <p className="flex gap-1"><Rating rating={clientData.rating} /> {clientData.vehicleTypes.map((vehicle) => <>{vehicle.type}: <b>{vehicle.quantity}</b> </>)}</p>
      </div>
    
      <a className="border border-gray-300 rounded block p-2 text-sm" href="#">
        Avg Fare <br/><span className="font-bold text-primary group-hover:text-white">Rs. {clientData.avgFare}*</span>
      </a>
    </div>
  )
}

const Rating = ({rating}: {rating: number}) => {
  const backgroundColor = rating > 4 ? "bg-green-500" : rating > 3 ? "bg-yellow-500" : "bg-red-500"
  return (
    <span className={`flex jusitfy-center px-1 rounded-md max-w-[max-content] ${backgroundColor}`}>
      <img className="mr-1" src="icons/star.svg" alt="Rating" />
      <span className="text-sm text-white">{rating}</span>
    </span>
  )
}