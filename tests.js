describe("vin-js", function() {
  good_vin = "5J6HYJ8V55L009357";

  it("accepts valid VINs", function() {
    expect(valid_vin(good_vin)).toBeTruthy();
  });

  it("fails on bad characters", function() {
    bad_vin = good_vin.replace('V','Q');
    expect(valid_vin(bad_vin)).toBeFalsy();
  });

  it("fails on bad checkdigit", function() {
    bad_vin = good_vin.replace('55', '45');
    expect(valid_vin(bad_vin)).toBeFalsy();
  });

  it("accepts valid VINs that are lowercase", function() {
    lowercase_vin = good_vin.toLowerCase();
    expect(valid_vin(lowercase_vin)).toBeTruthy();
  });

  // WMI is the country code
  /*
  it("fails on bad WMI", function() {
    bad_wmi = good_vin.replace(/^.{2}/, 'HA');
    expect(valid_vin(bad_wmi)).toBeFalsy();
  });
  */
});

