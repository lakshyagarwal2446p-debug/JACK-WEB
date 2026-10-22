# Jack Studio ✦ AI (v9.0 Commercial Production Release)

## Key Features
- **Real Database-Backed Login & Sign-Up (`JackConsumersDB`)**:
  - Uses asynchronous browser **IndexedDB** (`users` & `backups` object stores) with **WebCrypto SHA-256** password hashing + live 2-way **Google Firebase Authentication & Cloud Firestore (`consumers` collection)** sync.
  - Strict Sign-Up (`INSERT`) and Sign-In (`SELECT` + password hash verification) queries.
- **Confidential Owner Database & PC Backup Vault**:
  - Hidden from consumers; unlocked exclusively via the **Admin Vault** button with password `blaclaxy`.
- **Autonomous Online Food Ordering (Swiggy, Zomato, Uber Eats)**:
  - Clean empty address input with an `e.g.` sample format guide so users enter their own delivery address and phone number.
- **Commercial SaaS Plans in INR (`₹0`, `₹999/mo`, `₹2,999/mo`)**.
