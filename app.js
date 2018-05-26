var express       = require("express"),
    app           = express(),
    bodyParser    = require("body-parser"),
    User          = require("./models/user"),
    mongoose      = require("mongoose"),
    flash         = require("connect-flash"),
    passport      = require("passport"),
    LocalStrategy = require("passport-local"),
    methodOverride = require("method-override"),
    Campground    = require("./models/campground"),
    Comment       = require("./models/comment"),
    User          = require("./models/user"),
    seedDB        = require("./seeds");

// Require routes  
var commentRoutes    = require("./routes/comment"),
    campgroundRoutes = require("./routes/campgrounds"),
    indexRoutes      = require("./routes/index")

//mongoose.connect("mongodb://localhost/yelp_camp_v11");
mongoose.connect("mongodb://srvYelpCamp:pwdgoeshere@ds119160.mlab.com:19160/yelpcamp");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"))
app.use(methodOverride("_method"));
app.use(flash());
// seedDB(); //seed the database

// PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "Once again Rusty wins cutest dog!",
    resave: false,
    saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Middleware to provide currentUser status to all routes
// Also provide flash messages globally
app.use(function(req, res, next){
   //Gets logged in user if any
   res.locals.currentUser = req.user;
   //flash config
   res.locals.error = req.flash("error");
   res.locals.success = req.flash("success");
   next();
});

//Using routes
app.use(indexRoutes);
app.use(campgroundRoutes);
app.use(commentRoutes);


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp Server Has Started!");
});