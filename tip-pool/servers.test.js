describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it("should update the server table correctly when calling updateServerTable()", function () {
    allServers = {};
    allPayments = {};
    serverTbody.children = [];

    updateServerTable();

    for(let i = 0; i < serverTbody.children.length; i++) {
      serverTbody.children[i].remove();
    }

    serverNameInput.value = 'Rick';

    submitServerInfo();

    expect(serverTbody.children.length).toEqual(1);
  })

  afterEach(function() {
    serverNameInput.value = "";
  });
});
