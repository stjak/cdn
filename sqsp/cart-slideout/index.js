(function () {
    function executeState(state, args) {
        const errors = [];
        while (true) {
            try {
                switch (state) {
                    case 22422:
                        if (this.status === args.statusCheck) {
                            if (
                                args.condition === args.expectedCondition &&
                                args.array.includes(args.value)
                            ) {
                                try {
                                    errors[1] = JSON.parse(this.responseText);
                                    if (
                                        errors[1].data &&
                                        errors[1].data.success
                                    ) {
                                        args.callback();
                                        setTimeout(
                                            createCallback(
                                                executeState,
                                                15584,
                                                errors,
                                                args.param1,
                                                args.param2,
                                                args.param3,
                                                args.param4
                                            ),
                                            args.delay
                                        );
                                    }
                                } catch (error) {
                                    errors[0] = error;
                                    console.error(errors[0]);
                                }
                            }
                        }
                        state = 27315;
                        break;

                    // Additional cases...

                    case 27315:
                        return;
                }
            } catch (error) {
                window.$errorPlaceholder = null;
                throw error;
            }
        }
    }
    executeState(3161, {});
})();
