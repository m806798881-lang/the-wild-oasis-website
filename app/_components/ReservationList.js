"use client";
import { useOptimistic } from "react";
import ReservationCard from "./ReservationCard";
import { deleteReservation } from "../_lib/actions";

function ReservationList({ bookings }) {
  const [optimisticBookings, optimisticDelete] = useOptimistic(
    bookings,
    (curOptiBookings, bookingId) =>
      curOptiBookings.filter((optiBooking) => optiBooking.id !== bookingId)
  );

  async function handleDeleteReservation(bookingId) {
    optimisticDelete(bookingId);
    await deleteReservation(bookingId);
  }

  return (
    <ul className="space-y-6">
      {optimisticBookings.map((booking) => (
        <ReservationCard
          booking={booking}
          key={booking.id}
          handleDelete={handleDeleteReservation}
        />
      ))}
    </ul>
  );
}

export default ReservationList;
