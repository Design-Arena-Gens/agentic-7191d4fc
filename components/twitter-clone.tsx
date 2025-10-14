'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Home,
  Search,
  Bell,
  Mail,
  Bookmark,
  User,
  MoreHorizontal,
  Heart,
  MessageCircle,
  Repeat2,
  Share,
  ImageIcon,
  Smile,
  Calendar,
  MapPin,
} from 'lucide-react';

interface Tweet {
  id: number;
  author: {
    name: string;
    username: string;
    avatar: string;
  };
  content: string;
  timestamp: string;
  likes: number;
  retweets: number;
  replies: number;
  liked: boolean;
  retweeted: boolean;
}

export default function TwitterClone() {
  const [tweets, setTweets] = useState<Tweet[]>([
    {
      id: 1,
      author: {
        name: 'Sarah Chen',
        username: 'sarahchen',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
      },
      content: "Just shipped a major update to our platform! 🚀 The new features are going to make everyone's workflow so much smoother. Can't wait to hear what you all think!",
      timestamp: '2h',
      likes: 234,
      retweets: 45,
      replies: 23,
      liked: false,
      retweeted: false,
    },
    {
      id: 2,
      author: {
        name: 'Alex Rodriguez',
        username: 'alexrod',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
      },
      content: 'Hot take: TypeScript is the best thing that happened to JavaScript. Change my mind. 💭',
      timestamp: '4h',
      likes: 567,
      retweets: 89,
      replies: 156,
      liked: true,
      retweeted: false,
    },
    {
      id: 3,
      author: {
        name: 'Maya Patel',
        username: 'mayatech',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maya',
      },
      content: 'Spending my Sunday learning about Web3 and blockchain technology. The rabbit hole goes deep! 🕳️ Any recommendations for good resources?',
      timestamp: '6h',
      likes: 123,
      retweets: 34,
      replies: 67,
      liked: false,
      retweeted: false,
    },
    {
      id: 4,
      author: {
        name: 'Jordan Lee',
        username: 'jordanlee',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jordan',
      },
      content: 'Coffee ☕ + Code 💻 + Good Music 🎵 = Perfect morning',
      timestamp: '8h',
      likes: 891,
      retweets: 123,
      replies: 45,
      liked: true,
      retweeted: true,
    },
  ]);

  const [newTweet, setNewTweet] = useState('');

  const handleTweet = () => {
    if (newTweet.trim()) {
      const tweet: Tweet = {
        id: tweets.length + 1,
        author: {
          name: 'You',
          username: 'yourhandle',
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=You',
        },
        content: newTweet,
        timestamp: 'now',
        likes: 0,
        retweets: 0,
        replies: 0,
        liked: false,
        retweeted: false,
      };
      setTweets([tweet, ...tweets]);
      setNewTweet('');
    }
  };

  const toggleLike = (id: number) => {
    setTweets(
      tweets.map((tweet) =>
        tweet.id === id
          ? {
              ...tweet,
              liked: !tweet.liked,
              likes: tweet.liked ? tweet.likes - 1 : tweet.likes + 1,
            }
          : tweet
      )
    );
  };

  const toggleRetweet = (id: number) => {
    setTweets(
      tweets.map((tweet) =>
        tweet.id === id
          ? {
              ...tweet,
              retweeted: !tweet.retweeted,
              retweets: tweet.retweeted ? tweet.retweets - 1 : tweet.retweets + 1,
            }
          : tweet
      )
    );
  };

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar */}
      <aside className="w-64 border-r border-gray-800 p-4 sticky top-0 h-screen flex flex-col">
        <div className="mb-4">
          <svg
            viewBox="0 0 24 24"
            className="h-8 w-8 fill-white"
            aria-hidden="true"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </div>

        <nav className="flex-1 space-y-2">
          <Button
            variant="ghost"
            className="w-full justify-start text-lg hover:bg-gray-900"
          >
            <Home className="mr-4 h-6 w-6" />
            Home
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-lg hover:bg-gray-900"
          >
            <Search className="mr-4 h-6 w-6" />
            Explore
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-lg hover:bg-gray-900"
          >
            <Bell className="mr-4 h-6 w-6" />
            Notifications
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-lg hover:bg-gray-900"
          >
            <Mail className="mr-4 h-6 w-6" />
            Messages
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-lg hover:bg-gray-900"
          >
            <Bookmark className="mr-4 h-6 w-6" />
            Bookmarks
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-lg hover:bg-gray-900"
          >
            <User className="mr-4 h-6 w-6" />
            Profile
          </Button>
        </nav>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full bg-blue-500 hover:bg-blue-600 text-lg py-6 rounded-full">
              Tweet
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-black border-gray-800 text-white sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle className="sr-only">Create a tweet</DialogTitle>
            </DialogHeader>
            <div className="flex gap-4">
              <Avatar>
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=You" />
                <AvatarFallback>YO</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <Textarea
                  placeholder="What is happening?!"
                  className="min-h-[120px] border-none bg-transparent text-lg resize-none focus-visible:ring-0"
                  value={newTweet}
                  onChange={(e) => setNewTweet(e.target.value)}
                />
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-800">
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="hover:bg-gray-900">
                      <ImageIcon className="h-5 w-5 text-blue-500" />
                    </Button>
                    <Button variant="ghost" size="icon" className="hover:bg-gray-900">
                      <Smile className="h-5 w-5 text-blue-500" />
                    </Button>
                    <Button variant="ghost" size="icon" className="hover:bg-gray-900">
                      <Calendar className="h-5 w-5 text-blue-500" />
                    </Button>
                    <Button variant="ghost" size="icon" className="hover:bg-gray-900">
                      <MapPin className="h-5 w-5 text-blue-500" />
                    </Button>
                  </div>
                  <Button
                    className="bg-blue-500 hover:bg-blue-600 rounded-full"
                    disabled={!newTweet.trim()}
                    onClick={handleTweet}
                  >
                    Tweet
                  </Button>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="w-full justify-between hover:bg-gray-900 mt-4"
            >
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=You" />
                  <AvatarFallback>YO</AvatarFallback>
                </Avatar>
                <div className="text-left">
                  <div className="font-semibold">Your Name</div>
                  <div className="text-sm text-gray-500">@yourhandle</div>
                </div>
              </div>
              <MoreHorizontal className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-black border-gray-800 text-white">
            <DropdownMenuItem>Add an existing account</DropdownMenuItem>
            <DropdownMenuItem>Log out @yourhandle</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </aside>

      {/* Main Content */}
      <main className="flex-1 border-r border-gray-800 max-w-2xl">
        <div className="sticky top-0 bg-black/80 backdrop-blur-sm border-b border-gray-800 z-10">
          <Tabs defaultValue="for-you" className="w-full">
            <TabsList className="w-full h-auto bg-transparent border-b-0 rounded-none p-0">
              <TabsTrigger
                value="for-you"
                className="flex-1 rounded-none border-b-4 border-transparent data-[state=active]:border-blue-500 data-[state=active]:bg-transparent h-14 text-base"
              >
                For you
              </TabsTrigger>
              <TabsTrigger
                value="following"
                className="flex-1 rounded-none border-b-4 border-transparent data-[state=active]:border-blue-500 data-[state=active]:bg-transparent h-14 text-base"
              >
                Following
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Tweet Composer */}
        <div className="border-b border-gray-800 p-4">
          <div className="flex gap-4">
            <Avatar>
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=You" />
              <AvatarFallback>YO</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <Textarea
                placeholder="What is happening?!"
                className="min-h-[80px] border-none bg-transparent text-lg resize-none focus-visible:ring-0 p-0"
                value={newTweet}
                onChange={(e) => setNewTweet(e.target.value)}
              />
              <div className="flex items-center justify-between mt-4">
                <div className="flex gap-1">
                  <Button variant="ghost" size="icon" className="hover:bg-gray-900 h-9 w-9">
                    <ImageIcon className="h-5 w-5 text-blue-500" />
                  </Button>
                  <Button variant="ghost" size="icon" className="hover:bg-gray-900 h-9 w-9">
                    <Smile className="h-5 w-5 text-blue-500" />
                  </Button>
                  <Button variant="ghost" size="icon" className="hover:bg-gray-900 h-9 w-9">
                    <Calendar className="h-5 w-5 text-blue-500" />
                  </Button>
                  <Button variant="ghost" size="icon" className="hover:bg-gray-900 h-9 w-9">
                    <MapPin className="h-5 w-5 text-blue-500" />
                  </Button>
                </div>
                <Button
                  className="bg-blue-500 hover:bg-blue-600 rounded-full px-6"
                  disabled={!newTweet.trim()}
                  onClick={handleTweet}
                >
                  Tweet
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Feed */}
        <ScrollArea className="h-full">
          {tweets.map((tweet) => (
            <div key={tweet.id}>
              <Card className="border-0 border-b border-gray-800 rounded-none bg-transparent">
                <CardHeader className="pb-3">
                  <div className="flex gap-3">
                    <Avatar>
                      <AvatarImage src={tweet.author.avatar} />
                      <AvatarFallback>
                        {tweet.author.name.slice(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold hover:underline cursor-pointer">
                          {tweet.author.name}
                        </span>
                        <span className="text-gray-500">
                          @{tweet.author.username}
                        </span>
                        <span className="text-gray-500">·</span>
                        <span className="text-gray-500">{tweet.timestamp}</span>
                      </div>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="hover:bg-blue-500/10 hover:text-blue-500 h-8 w-8"
                        >
                          <MoreHorizontal className="h-5 w-5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="bg-black border-gray-800 text-white">
                        <DropdownMenuItem>
                          Delete
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          Pin to profile
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          Embed Tweet
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardHeader>
                <CardContent className="pb-3">
                  <p className="text-base leading-normal">{tweet.content}</p>
                </CardContent>
                <CardFooter className="pt-0 pb-4">
                  <div className="flex items-center justify-between w-full max-w-md">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="hover:bg-blue-500/10 hover:text-blue-500 text-gray-500 h-8 px-2"
                    >
                      <MessageCircle className="h-5 w-5" />
                      <span className="ml-2">{tweet.replies}</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className={`hover:bg-green-500/10 hover:text-green-500 h-8 px-2 ${
                        tweet.retweeted ? 'text-green-500' : 'text-gray-500'
                      }`}
                      onClick={() => toggleRetweet(tweet.id)}
                    >
                      <Repeat2 className="h-5 w-5" />
                      <span className="ml-2">{tweet.retweets}</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className={`hover:bg-pink-500/10 hover:text-pink-500 h-8 px-2 ${
                        tweet.liked ? 'text-pink-500' : 'text-gray-500'
                      }`}
                      onClick={() => toggleLike(tweet.id)}
                    >
                      <Heart
                        className={`h-5 w-5 ${tweet.liked ? 'fill-current' : ''}`}
                      />
                      <span className="ml-2">{tweet.likes}</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="hover:bg-blue-500/10 hover:text-blue-500 text-gray-500 h-8 px-2"
                    >
                      <Share className="h-5 w-5" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </div>
          ))}
        </ScrollArea>
      </main>

      {/* Right Sidebar */}
      <aside className="w-80 p-4 hidden xl:block">
        <div className="sticky top-4 space-y-4">
          <div className="bg-gray-900 rounded-2xl p-4">
            <h2 className="text-xl font-bold mb-4">What&apos;s happening</h2>
            <div className="space-y-4">
              {[
                {
                  category: 'Technology · Trending',
                  topic: 'AI Development',
                  tweets: '125K',
                },
                {
                  category: 'Sports · Live',
                  topic: 'World Cup 2024',
                  tweets: '89K',
                },
                {
                  category: 'Entertainment · Trending',
                  topic: 'New Movie Release',
                  tweets: '67K',
                },
                {
                  category: 'Politics · Trending',
                  topic: 'Election Updates',
                  tweets: '234K',
                },
              ].map((trend, i) => (
                <div
                  key={i}
                  className="cursor-pointer hover:bg-gray-800 p-2 rounded-lg transition-colors"
                >
                  <div className="text-xs text-gray-500">{trend.category}</div>
                  <div className="font-bold">{trend.topic}</div>
                  <div className="text-xs text-gray-500">
                    {trend.tweets} Tweets
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-900 rounded-2xl p-4">
            <h2 className="text-xl font-bold mb-4">Who to follow</h2>
            <div className="space-y-4">
              {[
                {
                  name: 'Tech News Daily',
                  username: 'technewsdaily',
                  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tech',
                },
                {
                  name: 'Design Inspiration',
                  username: 'designinspo',
                  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Design',
                },
                {
                  name: 'Coding Tips',
                  username: 'codingtips',
                  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Coding',
                },
              ].map((user, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <AvatarImage src={user.avatar} />
                      <AvatarFallback>
                        {user.name.slice(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-bold text-sm hover:underline cursor-pointer">
                        {user.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        @{user.username}
                      </div>
                    </div>
                  </div>
                  <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-4">
                    Follow
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
