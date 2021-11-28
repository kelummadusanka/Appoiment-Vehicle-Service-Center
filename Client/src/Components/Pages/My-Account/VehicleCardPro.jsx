import VehicleCard from "./VehicleCard";

function VehicleCardPro({ services, vehicle, showModal, setShowModal,setMyVehicles,myVehicles }) {
  return (
    <div>
      {showModal ? (
        <VehicleCard
          services={services}
          vehicle={vehicle}
          showModal={showModal}
          setShowModal={setShowModal}
          setMyVehicles={setMyVehicles}
          myVehicles={myVehicles}
        />
      ) : null}
    </div>
  );
}

export default VehicleCardPro;
