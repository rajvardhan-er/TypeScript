// 02:34:24 - 02:38:27 - Classes & Objects : Static Members

class Update{
    version = 1.0;  // We cannot access this directly on console as Update.version so it will prints undefined because we not created 'new Update'
}

class Updates{
    static version = 4.1; // Now we can access this without creating any instance on console, just by using static 
}

// if we use STATIC on any method or any variable, so without creating any instance of this, we can directly use this inside class. 