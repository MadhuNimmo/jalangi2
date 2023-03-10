function xyz(store) {
        //note: using non-strict equality check here because we're checking if store is null OR undefined
        if (((store != null && type.call(store) === OBJECT) || typeof store === FUNCTION) && typeof store.then === FUNCTION) {
                return true
        }

        return false
};
xyz()