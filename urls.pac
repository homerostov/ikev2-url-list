function FindProxyForURL(url, host) {
    // Instagram routes
 var rules = [
        "https://raw.githubusercontent.com/misha-tgshv/shadowrocket-configuration-file/release/rules/domain_community.list",
        "https://raw.githubusercontent.com/misha-tgshv/shadowrocket-configuration-file/release/rules/domain_antifilter.list",
        "https://raw.githubusercontent.com/misha-tgshv/shadowrocket-configuration-file/release/rules/domain_refilter.list",
        "https://raw.githubusercontent.com/misha-tgshv/shadowrocket-configuration-file/release/rules/geoip_antifilter.list",
        "https://raw.githubusercontent.com/misha-tgshv/shadowrocket-configuration-file/release/rules/domain_youtube.list",
        "https://raw.githubusercontent.com/misha-tgshv/shadowrocket-configuration-file/release/rules/domain_discord.list",
        "https://raw.githubusercontent.com/helmiau/clashrules/refs/heads/main/shadowrocket/Game_Discord_Ports.list"
    ];
    // Iterate through rules to check if the URL matches
    for (var i = 0; i < rules.length; i++) {
        if (shExpMatch(host, rules[i])) {
        return "PROXY 143.47.184.29:500";
    }
    return "DIRECT";
}
