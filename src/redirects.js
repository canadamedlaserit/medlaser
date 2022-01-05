module.exports = ({
    actions
}) => {
    const {
        createRedirect
    } = actions;
    const Redirects = [
        {
            fromPath: "https://canadamedlaser.ca/hair-transplant-toronto/",
            toPath: "https://canadamedlaser.ca/2018/09/20/hair-transplant-toronto/",
        },
        {
            fromPath: "https://canadamedlaser.ca/stretch-marks/",
            toPath: "https://canadamedlaser.ca/2017/04/18/stretch-marks-removal/",
        },
        {
            fromPath: "https://canadamedlaser.ca/botox-dysport/",
            toPath: "https://canadamedlaser.ca/botox/",
        },
        {
            fromPath: "https://canadamedlaser.ca/microneedling-vs-home-dermaroller/",
            toPath: "https://canadamedlaser.ca/2017/05/15/microneedling-vs-home-dermaroller/",
        },
        {
            fromPath: "https://canadamedlaser.ca/2019/01/13/botox-injection-prices-in-canada/",
            toPath: "https://canadamedlaser.ca/2019/01/13/botox-injection-prices-in-toronto/",
        },
        {
            fromPath: "https://canadamedlaser.ca/2018/11/28/coolsculpting-prices-in-canada/",
            toPath: "https://canadamedlaser.ca/2018/11/28/coolsculpting-prices-in-toronto/",
        },
        {
            fromPath: "https://canadamedlaser.ca/2019/04/11/skin-pigmentation：cost-procedure-benefits-and-potential-risks/",
            toPath: "https://canadamedlaser.ca/2019/04/11/skin-pigmentation-cost-procedure-benefits-and-potential-risks/",
        },
        {
            fromPath: "https://canadamedlaser.ca/2018/09/26/microdermabrasion-for-acne-and-scarring/",
            toPath: "https://canadamedlaser.ca/2019/06/05/what-are-the-treatments-for-acne-scars/",
        },
        {
            fromPath: "https://canadamedlaser.ca/locations/vancouver/cosmetic-injections/",
            toPath: "https://canadamedlaser.ca/location/mississauga/cosmetic-injections/",
        },
        {
            fromPath: "https://canadamedlaser.ca/laser-hair-removal-woman/",
            toPath: "https://canadamedlaser.ca/laser-hair-removal-women/",
        },
        {
            fromPath: "https://canadamedlaser.ca/laser-hair-removal/facial-hair-removal-toronto/",
            toPath: "https://canadamedlaser.ca/facial-hair-removal/",
        },
        {
            fromPath: "https://canadamedlaser.ca/laser-hair-removal/brazilian-laser-hair-removal-by-canada-med-laser/",
            toPath: "https://canadamedlaser.ca/brazilian-laser-hair-removal/",
        },
        {
            fromPath: "https://canadamedlaser.ca/specials/",
            toPath: "https://shop.canadamedlaser.ca/specials/",
        },
        {
            fromPath: "https://canadamedlaser.ca/mississauga/wrinkle-treatment-mississauga/",
            toPath: "https://canadamedlaser.ca/location/mississauga/wrinkle-treatment-mississauga/",
        },
        {
            fromPath: "https://canadamedlaser.ca/brazilian-laser-hair-removal-in-thornhill/",
            toPath: "https://canadamedlaser.ca/thornhill/brazilian-laser-hair-removal-in-thornhill/",
        },
        {
            fromPath: "https://canadamedlaser.ca/toronto/",
            toPath: "https://canadamedlaser.ca/location/toronto/",
        },
        {
            fromPath: "https://canadamedlaser.ca/mississauga/",
            toPath: "https://canadamedlaser.ca/location/mississauga/",
        },
        {
            fromPath: "https://canadamedlaser.ca/newmarket/",
            toPath: "https://canadamedlaser.ca/location/newmarket/",
        },
        {
            fromPath: "https://canadamedlaser.ca/maple/",
            toPath: "https://canadamedlaser.ca/location/maple/",
        },
        {
            fromPath: "https://canadamedlaser.ca/thornhill/",
            toPath: "https://canadamedlaser.ca/location/thornhill/",
        },
        {
            fromPath: "https://canadamedlaser.ca/vaughan/",
            toPath: "https://canadamedlaser.ca/location/vaughan/",
        },
        {
            fromPath: "https://canadamedlaser.ca/lp/canadamedlaser_content/",
            toPath: "https://canadamedlaser.ca/lp/canadamedlaser-content/",
        },
    ]
    return (
        Redirects.forEach((redirect) => (
            createRedirect({
                fromPath: `${redirect.fromPath}`,
                toPath: `${redirect.toPath}`,
                isPermanent: true,
                force: true
            })
        ))
    )
}