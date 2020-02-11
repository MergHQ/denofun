import { test } from "https://deno.land/std@v0.32.0/testing/mod.ts";
import { assertEquals } from "https://deno.land/std@v0.32.0/testing/asserts.ts"

import prop from '../lib/prop.ts';

const car = { make: "Alfa Romeo", model: "Giulia" };

test({
    name: "prop",
    fn(): void {
        assertEquals(prop("make", car), "Alfa Romeo");
        assertEquals(prop("wheels", car), undefined);
    }
})
