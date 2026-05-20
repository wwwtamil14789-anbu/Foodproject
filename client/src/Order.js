import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Order = () => {
  const [submitted, setSubmitted] = useState(false);
  const [bookingDetails, setBookingDetails] = useState(null);
  const [error, setError] = useState(null);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      guests: 2,
      date: '',
      time: '',
      specialRequest: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, 'Name must be at least 2 characters')
        .required('Full Name is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email address is required'),
      phone: Yup.string()
        .matches(/^[0-9+\-\s()]*$/, 'Invalid phone number')
        .min(10, 'Phone number must be at least 10 digits')
        .required('Phone number is required'),
      guests: Yup.number()
        .min(1, 'At least 1 guest is required')
        .max(20, 'For parties larger than 20, please contact us directly')
        .required('Number of guests is required'),
      date: Yup.string()
        .required('Booking date is required'),
      time: Yup.string()
        .required('Booking time is required'),
      specialRequest: Yup.string()
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        setError(null);
        const response = await axios.post('http://localhost:5000/api/bookings', values);
        setBookingDetails(response.data.booking);
        setSubmitted(true);
        resetForm();
      } catch (err) {
        console.error('Error booking table:', err);
        setError(err.response?.data?.error || err.response?.data?.message || 'Something went wrong while booking your table. Please try again.');
      } finally {
        setSubmitting(false);
      }
    }
  });

  return (
    <div className="order-container pt-5 mt-5 pb-5">
      <div className="container py-5">
        {!submitted ? (
          <div className="row justify-content-center">
            <div className="col-lg-8 animate-fade-up">
              <div className="text-center mb-5">
                <h6 className="text-warning text-uppercase ls-2">Reservations</h6>
                <h1 className="display-4">Book A <span className="glow-text">Table</span></h1>
                <p className="text-muted col-lg-8 mx-auto">
                  Experience stellar fine dining. Reserve your table now and let us prepare a memorable culinary journey for you.
                </p>
              </div>

              <div className="glass-card p-5">
                {error && (
                  <div className="alert alert-danger bg-dark text-warning border-warning mb-4" role="alert">
                    {error}
                  </div>
                )}

                <form onSubmit={formik.handleSubmit}>
                  <div className="row g-4">
                    {/* Name */}
                    <div className="col-md-6">
                      <label htmlFor="name" className="form-label text-warning fw-semibold">Full Name</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        className={`form-control bg-dark text-light border-secondary py-3 rounded-pill px-4 ${formik.touched.name && formik.errors.name ? 'is-invalid border-danger' : ''}`}
                        placeholder="Enter your name"
                        {...formik.getFieldProps('name')}
                      />
                      {formik.touched.name && formik.errors.name ? (
                        <div className="invalid-feedback px-3">{formik.errors.name}</div>
                      ) : null}
                    </div>

                    {/* Email */}
                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label text-warning fw-semibold">Email Address</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className={`form-control bg-dark text-light border-secondary py-3 rounded-pill px-4 ${formik.touched.email && formik.errors.email ? 'is-invalid border-danger' : ''}`}
                        placeholder="Enter your email"
                        {...formik.getFieldProps('email')}
                      />
                      {formik.touched.email && formik.errors.email ? (
                        <div className="invalid-feedback px-3">{formik.errors.email}</div>
                      ) : null}
                    </div>

                    {/* Phone */}
                    <div className="col-md-6">
                      <label htmlFor="phone" className="form-label text-warning fw-semibold">Phone Number</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        className={`form-control bg-dark text-light border-secondary py-3 rounded-pill px-4 ${formik.touched.phone && formik.errors.phone ? 'is-invalid border-danger' : ''}`}
                        placeholder="+91 ***********"
                        {...formik.getFieldProps('phone')}
                      />
                      {formik.touched.phone && formik.errors.phone ? (
                        <div className="invalid-feedback px-3">{formik.errors.phone}</div>
                      ) : null}
                    </div>

                    {/* Guests */}
                    <div className="col-md-6">
                      <label htmlFor="guests" className="form-label text-warning fw-semibold">Number of Guests</label>
                      <select
                        id="guests"
                        name="guests"
                        className={`form-select bg-dark text-light border-secondary py-3 rounded-pill px-4 ${formik.touched.guests && formik.errors.guests ? 'is-invalid border-danger' : ''}`}
                        {...formik.getFieldProps('guests')}
                      >
                        {[...Array(20)].map((_, i) => (
                          <option key={i + 1} value={i + 1} className="bg-dark text-light">
                            {i + 1} {i + 1 === 1 ? 'Guest' : 'Guests'}
                          </option>
                        ))}
                      </select>
                      {formik.touched.guests && formik.errors.guests ? (
                        <div className="invalid-feedback px-3">{formik.errors.guests}</div>
                      ) : null}
                    </div>

                    {/* Date */}
                    <div className="col-md-6">
                      <label htmlFor="date" className="form-label text-warning fw-semibold">Date</label>
                      <input
                        id="date"
                        name="date"
                        type="date"
                        min={new Date().toISOString().split('T')[0]}
                        className={`form-control bg-dark text-light border-secondary py-3 rounded-pill px-4 ${formik.touched.date && formik.errors.date ? 'is-invalid border-danger' : ''}`}
                        {...formik.getFieldProps('date')}
                      />
                      {formik.touched.date && formik.errors.date ? (
                        <div className="invalid-feedback px-3">{formik.errors.date}</div>
                      ) : null}
                    </div>

                    {/* Time */}
                    <div className="col-md-6">
                      <label htmlFor="time" className="form-label text-warning fw-semibold">Time Slot</label>
                      <select
                        id="time"
                        name="time"
                        className={`form-select bg-dark text-light border-secondary py-3 rounded-pill px-4 ${formik.touched.time && formik.errors.time ? 'is-invalid border-danger' : ''}`}
                        {...formik.getFieldProps('time')}
                      >
                        <option value="" className="bg-dark text-light">Select a time slot</option>
                        <option value="12:00 PM" className="bg-dark text-light">12:00 PM (Lunch)</option>
                        <option value="1:00 PM" className="bg-dark text-light">1:00 PM (Lunch)</option>
                        <option value="2:00 PM" className="bg-dark text-light">2:00 PM (Lunch)</option>
                        <option value="4:00 PM" className="bg-dark text-light">4:00 PM (Afternoon)</option>
                        <option value="5:00 PM" className="bg-dark text-light">5:00 PM (Afternoon)</option>
                        <option value="6:00 PM" className="bg-dark text-light">6:00 PM (Afternoon)</option>
                        <option value="8:00 PM" className="bg-dark text-light">8:00 PM (Dinner)</option>
                        <option value="9:00 PM" className="bg-dark text-light">9:00 PM (Dinner)</option>
                        <option value="10:00 PM" className="bg-dark text-light">10:00 PM (Dinner)</option>
                      </select>
                      {formik.touched.time && formik.errors.time ? (
                        <div className="invalid-feedback px-3">{formik.errors.time}</div>
                      ) : null}
                    </div>

                    {/* Special Request */}
                    <div className="col-12">
                      <label htmlFor="specialRequest" className="form-label text-warning fw-semibold">Special Requests (Optional)</label>
                      <textarea
                        id="specialRequest"
                        name="specialRequest"
                        rows="4"
                        className="form-control bg-dark text-light border-secondary p-4 rounded-3"
                        placeholder="Ex: Dietary restrictions, high chair for children, anniversary celebration, preferred seating area..."
                        {...formik.getFieldProps('specialRequest')}
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="col-12 text-center mt-5">
                      <button
                        type="submit"
                        disabled={formik.isSubmitting}
                        className="btn btn-warning btn-lg rounded-pill px-5 py-3 fw-bold"
                      >
                        {formik.isSubmitting ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            Securing Table...
                          </>
                        ) : 'Confirm Reservation'}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        ) : (
          <div className="row justify-content-center">
            <div className="col-lg-6 animate-fade-up">
              <div className="glass-card p-5 text-center shadow-lg border-warning">
                <div className="display-1 text-warning mb-4">🍽️</div>
                <h2 className="mb-3 glow-text text-uppercase fw-bold">Table Confirmed!</h2>
                <h4 className="text-light mb-4">Thank you, {bookingDetails?.name}!</h4>
                <p className="text-muted mb-5 leading-relaxed">
                  Your table for <span className="text-warning fw-bold">{bookingDetails?.guests} guests</span> has been successfully reserved on <span className="text-white fw-bold">{bookingDetails?.date}</span> at <span className="text-white fw-bold">{bookingDetails?.time}</span>.
                </p>

                <div className="bg-dark rounded-4 p-4 mb-5 text-start border border-secondary">
                  <h6 className="text-warning text-uppercase mb-3 ls-2">Reservation Info</h6>
                  <div className="mb-2 text-light"><strong className="text-muted">Booking Reference:</strong> {bookingDetails?._id}</div>
                  <div className="mb-2 text-light"><strong className="text-muted">Phone Number:</strong> {bookingDetails?.phone}</div>
                  <div className="mb-2 text-light"><strong className="text-muted">Confirmation Email:</strong> {bookingDetails?.email}</div>
                  {bookingDetails?.specialRequest && (
                    <div className="mt-3 pt-3 border-top border-secondary text-light">
                      <strong className="text-muted d-block mb-1">Your Special Request:</strong>
                      <span className="fst-italic text-muted">{bookingDetails?.specialRequest}</span>
                    </div>
                  )}
                </div>

                <div className="d-flex justify-content-center gap-3">
                  <Link to="/" className="btn btn-warning rounded-pill px-5 py-3 fw-bold">Back to Home</Link>
                  <Link to="/product" className="btn btn-outline-light rounded-pill px-5 py-3">View Menu</Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Order;