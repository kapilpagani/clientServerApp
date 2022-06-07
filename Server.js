class Server {
  constructor() {
    this.channels = {
      channel1: {
        message: "",
        subscribers: ["clinet1"],
        subscriberWithChannel: [],
      },
    };
  }

  createChannels(channel, message, subscriber) {
    this.channels[channel].message = message;
    this.channels[channel].subscribers.push(subscriber);
    this.channels[channel].subscriberWithChannel.push({
      name: subscriber,
      message,
      channel,
    });
  }

  getData() {
    for (const channel in this.channels) {
      if (this.channels.hasOwnProperty(channel)) {
        const channelObj = this.channels[channel];
        return channelObj;
      }
    }
  }
}

const server = new Server();

const clientA = server.createChannels(
  "channel1",
  "hello from channel2",
  "clintA"
);

const clientB = server.createChannels(
  "channel1",
  "hello from clientB",
  "clientB"
);

const clientC = server.createChannels(
  "channel1",
  "hello from clientC",
  "clientC"
);
console.log(server.getData());
