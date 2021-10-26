(function () {
        var user = {
          firstName: "John",
          fullName: function () {
            return this.firstName;
          },
        };
      
        function func() {
          return this.fullName;
        }
        var funcUser = func.bind(user);
        var newFullName = funcUser();
        newFullName();
        var newFullName2 = funcUser.call(this);
        newFullName2();
})();
      