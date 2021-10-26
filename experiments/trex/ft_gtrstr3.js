var shout = {
        _message: "HELLO!",
        }
Object.defineProperty(o, "message", {        
        get() {
          return this._message;
        },
      
        set(value) {
          this._message = value;
        }
      })
      
shout.message = "This is sparta!";
shout.message;