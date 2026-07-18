const express = require('express');
const cors = require('cors');
const path = require("path");

const app = express();

app.use(express.json());
app.use(cors());

// public folder for users profile
app.use('/profileImgs', express.static(path.join(__dirname, 'public/profileImgs')));
app.use('/resume', express.static(path.join(__dirname, 'public/resumes')));
app.use('/offerLetter', express.static(path.join(__dirname, 'public/offerLetter')));

// database import 
const mongodb = require('./config/MongoDB');
const bcrypt = require('bcrypt');
const User = require('./models/user.model');

const createDefaultManagementAdmin = async () => {
  try {
    const existingUser = await User.findOne({ email: 'team44@gmail.com', role: 'management_admin' });
    if (existingUser) {
      console.log('Default management admin already exists.');
      return;
    }

    const passwordHash = await bcrypt.hash('Team44', 10);

    await User.create({
      first_name: 'Team44',
      email: 'team44@gmail.com',
      number: 0,
      password: passwordHash,
      role: 'management_admin',
      isProfileCompleted: true,
    });

    console.log('Default management admin created: team44@gmail.com / Team44');
  } catch (error) {
    console.error('Error creating default management admin:', error);
  }
};

mongodb().then(() => createDefaultManagementAdmin());


// routes for user
app.use('/user', require('./routes/user.route'));
// routes for student user
app.use('/student', require('./routes/student.route'));
// routes for tpo user
app.use('/tpo', require('./routes/tpo.route'));
// routes for management user
app.use('/management', require('./routes/management.route'));
// routes for admin user
app.use('/admin', require('./routes/superuser.route'));

// route for company
app.use('/company', require('./routes/company.route'));
// test route
app.use('/test', (req, res)=>{
  res.status(200).send("Working Fine!");
});


app.listen(process.env.PORT, () => {
  console.log(`server is running in http://localhost:${process.env.PORT}`);
});
