function xyz(store) {
        //note: using non-strict equality check here because we're checking if store is null OR undefined
        if (store !== true) {
                return true
        }

        return false
};
xyz()