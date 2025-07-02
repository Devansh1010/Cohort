# PRD of Car Washing System

## Objective

- Provide Convinent Booking options for customers.
- Mantain schedule and record for Shopkeeper.

## User Stories: 

User Story: -

- muje kal bahar jana hein importent metting me to muje aaj car wash karvani hein par mere pas time nhi he.

- hame gumne jana he to car wash karvani he.

- Me gum k aaya hu or kal se muje office jana hein to muje car wash karvani he.

- Car bohot gandi ho gai he to muje car wash karvani he.

- Har hapte or mahine me muje meri car wash chahie


Use Cases: -

- Schedule you car wash
- Pick up and drop safely your car for wash
- Check Availabilty of Car Wash
- Show how much time does car wash take
- Show status of you car
- Feedback option


## Scope: 
- User Account
- User Vehicles Section
- History of Car wash last 2 or 3
- Calander view and slot booking option
- Car Status section
- responcible person details
- complain box

not in Scope: 

- Payment Integration

## Feature Requirenment

### P1
    Booking Options
    Cancle Booking 
    Calnder View
    notification about updates
    car current status
    feedback option
    complaint section
    customer support
### P2
    Payment Integration
    AI Chat-bot


## Design Requirement

### 👤 User App / Web (Business Clients & Customers)

#### ✅ 1. Quick Booking (First-Time Flow)

* Select vehicle type:

  * 🔘 2-Wheeler
  * 🔘 4-Wheeler
* Select service type (if applicable)
* Choose pickup or drop-off at shop
* Enter/select pickup location (with map or manual input)
* Pick date & time slot (calendar view)
* **No need to enter full vehicle details** at this stage
* Booking confirmation with reference ID

#### ✅ 2. Auto Vehicle Info Collection (For User Convenience)

* During pickup or at shop, staff will:

  * Enter vehicle brand, model, color, plate number
  * Optionally upload a photo of the vehicle
* These details get saved under the user's account
* On next booking:

  * Vehicle info auto-suggested
  * User can manually edit or add new vehicles

#### ✅ 3. Vehicles Section (User Dashboard)

* List of user's saved vehicles
* View past 2–3 wash histories per vehicle
* Action options:

  * 🔁 Re-book
  * ✏️ Edit
  * ➕ Add New
  * ❌ Delete

#### ✅ 4. Bookings Section

* Upcoming bookings
* Status tracker:

  * Pending → Pickup Scheduled → In Washing → Drying → Ready → Delivered
* Real-time updates via notifications
* Live ETA of service

#### ✅ 5. Car Status Page

* Visual stage display with animations or icons
* Optional: “Driver en route” with Google Maps redirection
* Time estimate
* Responsible person info

#### ✅ 6. Feedback & Complaint

* Rate service post-delivery
* Submit complaints with category & message
* Track status: Open, In Progress, Resolved

---

### 🛠️ Admin Panel (Owner + Staff Access)

#### ✅ 1. Login & Role-Based Access

* Roles:

  * Super Admin (Full Access)
  * Manager (Bookings, Complaints, Feedback)
  * Washer (Assigned Jobs, Status Updates)
  * Driver (Pickups & Drops)
* Role permissions:

  * Clearly defined access per module
  * Logs of all admin actions

#### ✅ 2. Dashboard Overview

* Bookings Today / Upcoming / Completed
* Vehicle queue status: Washing, Waiting, Drying
* Booking funnel chart (Optional)
* Feedback/Rating summary

#### ✅ 3. Booking & Calendar Management

* Calendar view with color-coded slots
* Add/Edit/Cancel bookings
* Assign washer or driver
* View booking notes, customer preferences

#### ✅ 4. Vehicle Master List

* List of all registered vehicles per client
* Frequency of wash (Weekly, Monthly)
* Last washed, next due
* Manual edits allowed

#### ✅ 5. Complaint & Feedback Handling

* Inbox-like view
* Status: Open, In Progress, Closed
* Assign to team member
* Reply via system (optional)

#### ✅ 6. Pickup & Drop Management (Driver Panel)

* View assigned pickups
* Click-to-navigate with Google Maps
* "Mark as Picked Up", "Mark as Delivered"
* Call buttons for customer/admin

---

### 📩 Notification System

* Push, email, and SMS notifications
* Triggered at key stages:

  * Booking confirmed
  * Driver assigned
  * Car picked up
  * Washing started
  * Delivery on the way
  * Completed
  * Feedback requested




