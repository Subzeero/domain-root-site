// AboutSChat.tsx - React "S-Chat" project element for "About" pages
// Subzeero (Zander Rommelaere)
// January 16, 2024

import schat from "../assets/s-chat.jpeg";

function AboutSChat(): JSX.Element {
  return (
    <div
      className="col vh-100 container pt-3 p-5 justify-content-center"
      style={{ maxWidth: "1320px" }}
    >
      <span className="text-center">
        <h2>S-Chat</h2>
        <h5 className="text-dark text-opacity-75">
          A Cross-Architecture Multi-Threaded Chat Program from CMPT-332:
          Operating System Concepts
        </h5>
        <hr />
      </span>
      <p>
        In my operating systems class there was an assignment that I found
        particularly challenging, yet also very interesting. As one part of the
        assignment, we were instructed to create a simple chat application where
        two users could communicate with each other from their terminals. The
        application was to use the UDP transport protocol and a custom threading
        package with the use of Inter-Process-Communication (IPC). Additionally,
        the application would be cross platform, so users on x86, ARM, and
        PowerPC systems could communicate with each other.
      </p>
      <p>
        The implementation of S-Chat can be broken down into the 5 threads that
        work together:
        <ul>
          <li>
            Server: this thread is the main coordinator and makes sure that
            everything gets done. All other threads communicate with the Server
            thread.
          </li>
          <li>
            Keyboard: this thread asynchronously listens for keyboard input
            without blocking. When a user hits [ENTER], the input is sent to the
            Server thread.
          </li>
          <li>
            Display: this thread is always awaiting messages from the Server
            thread. Upon receiving a message, its content is displayed to the
            console.
          </li>
          <li>
            Transmit: this thread begins by establishing a UDP socket for the
            other machine. It is also always awaiting messages from the Server
            thread. Upon receiving a message, its content is passed along to the
            UDP socket and sent to the other machine.
          </li>
          <li>
            Receive: this thread again begins by establishing a UDP socker for
            the other machine. It is always awaiting messages from the UDP
            socket of the other machine. Upon receiving a message, its content
            is passed along to the Server thread.
          </li>
        </ul>
      </p>
      <p>
        While working on this project I came across a tricky bug where my
        timestamp was getting scrambled up on its way from one machine to the
        other. At first, I simply figured that I had forgot to property
        translate the timestamp into network byte order and then back into host
        byte order. Because of the cross-architecture nature of the application,
        I figured there was an endianness issue that was scrambling my
        timestamps. However, I implemented these translations, and the bug
        remained. The next set of debugging and troubleshooting was a lengthy
        process, but I finally figured out the issue to be one of type-casting
        across the different architectures. It turned out that the defined size
        of an <code>int</code> was different between the three architectures, so
        when the bits got passed around between the architectures there was a
        chance of them getting misinterpreted. I was able to finally resolve
        this issue by directly defining an <code>int</code> type of defined
        size.
      </p>
      <img
        src={schat}
        alt="s-chat example"
        className="img-fluid rounded mx-auto d-block mb-3 border border-1 border-secondary-subtle"
      ></img>
      <p>
        In the image above, both users on two different machines connect by
        exchaning their listening and receiving ports, as well as their machine
        hostname/IP address. Then, any messages they type with be displayed to
        the other user along with the timestamp it was sent.
      </p>
      <p>
        While working on this project, the importance of modular design,
        frequent testing, and patience were the the biggest things that were
        reenforced. Considering the complex concepts and the difficulty behind
        getting them to function accurately, breaking the application down into
        small, testable pieces was essential. I started very basic with each
        task (input, output, transmit, receive) as the single purpose of the
        program. If I could get it working alone, then I could get it working
        together. Further, frequent testing was another essential part of the
        development of S-Chat. Given the preciseness of getting all components
        of the program work individually, working to combine them was a
        difficult task. I made small steps as I developed the program and
        conducted frequent tests to ensure I did not make any unforseen
        regressions. And finally, having the patience to work through
        complicated low-level C code was another important part of completing
        this assignment. When first getting start in the design and
        visualization phase, it was easy to get lost and bewildered by the
        unfriendly and unnatural syntax of socket/network programming. The same
        feeling resulted when trying to debug the timestamp issue I faced later
        on. Taking time to slow down, and do one thing at a time was a critical
        aspect of working through the difficult code of this assignment. It was
        not as easy as skimming through the HTML or TypeScript of this very
        page, but it still could be—and was—done with some more time.
      </p>
      <br />
    </div>
  );
}

export default AboutSChat;
