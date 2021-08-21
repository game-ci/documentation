# When are dedicated servers cheaper?

In situations where you have high and consistent usage, a dedicated build server can be cheaper.

Organizations running enough builds to benefit from this must also consider the total cost of managing and maintaining that infrastructure and the loss of the capabilities mentioned above.

## So there's another charge required to use Cloud Builder?

That's right, its core to the concept that you're sending work to a cloud platform.

_The cloud platform will require a payment_. The monthly bill will be calculated on demand based on your storage and server usage.

Cloud providers typically charge much less than typical public services though. This is because it is backend infrastructure and businesses wouldn't be profitable if the underlying infrastructure cost as much as their products. So you're unlikely to find a better deal. 🙂

Cloud Builder can typically store very large projects and run high numbers of builds without costing very much. Developing Cloud Builder and running a few thousand jobs each month rarely cost more than 10 USD per month.

Most cloud providers also offer a free tier which can easily support Cloud Builder running a decent number of jobs each month.

[Insert table for our estimates for AWS and GCP free tier and costs]

If you need help estimating your bill, talk to us discord.

### When to use GitHub self-hosted runner or Remote Builder?

[GitHub self-hosted runners](https://docs.github.com/en/actions/hosting-your-own-runners/about-self-hosted-runners) and Remote Builder can enable you to build larger projects.

Self-hosted runners are best used when you already have a server available, running 24/7 that you can setup as a runner. And you're happy to maintain and keep that server available and running.

Remote Builder is better if you don't have a server setup or don't want to manage or maintain your own build server.
