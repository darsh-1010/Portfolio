# 🚀 Groq AI Integration Setup Guide

## What is Groq?

**Groq** is a lightning-fast AI service that provides:
- **100 requests/day FREE** (no credit card required)
- **Millisecond responses** (10-100x faster than OpenAI)
- **High-quality models** (Llama 3.1, Mixtral, etc.)
- **Simple API** integration
- **No rate limits** on free tier

## 🎯 Why Groq is Perfect for Your Portfolio

1. **Cost**: 100% free for portfolio usage
2. **Speed**: Responses in milliseconds (impressive UX)
3. **Quality**: Professional-grade AI responses
4. **Reliability**: Enterprise-grade service
5. **Portfolio Impact**: Shows cutting-edge AI integration skills

## 📋 Setup Steps

### Step 1: Get Your Groq API Key

1. **Visit**: [console.groq.com](https://console.groq.com)
2. **Sign Up**: Create account (no credit card needed)
3. **Get API Key**: Copy from dashboard
4. **Note**: Free tier gives 100 requests/day

### Step 2: Configure Environment Variables

Create a `.env` file in your project root:

```env
# Groq AI API Configuration
VITE_GROQ_API_KEY=your_actual_groq_api_key_here

# Chatbot Settings
VITE_CHATBOT_ENABLED=true
VITE_CHATBOT_AI_SERVICE=groq
```

### Step 3: Test the Integration

1. **Start your dev server**: `npm run dev`
2. **Open the chatbot** in your portfolio
3. **Ask a question** - it should use Groq for responses
4. **Check console** for any API errors

## 🔧 Configuration Options

### Available AI Services

```javascript
// In src/config/chatbot.js
export const chatbotConfig = {
  aiService: 'groq', // Options: 'groq', 'local', 'hybrid'
  groqModel: 'llama3-8b-8192', // Fast and free model
  maxTokens: 200, // Response length limit
};
```

### Groq Models Available

- **`llama3-8b-8192`** - Fast, free, good quality
- **`mixtral-8x7b-32768`** - Higher quality, still fast
- **`llama3-70b-8192`** - Best quality, slightly slower

## 🚨 Troubleshooting

### Common Issues

1. **"Groq API failed" error**
   - Check if API key is correct
   - Verify API key is in `.env` file
   - Ensure `.env` file is in project root

2. **Chatbot not responding**
   - Check browser console for errors
   - Verify environment variables are loaded
   - Try refreshing the page

3. **Slow responses**
   - Groq should be very fast
   - If slow, check network tab
   - Verify you're not hitting rate limits

### Debug Mode

Add this to see what's happening:

```javascript
// In browser console
console.log('Environment check:', {
  groqKey: process.env.VITE_GROQ_API_KEY ? 'Set' : 'Not set',
  aiService: chatbotConfig.aiService,
  groqModel: chatbotConfig.groqModel
});
```

## 💡 Advanced Features

### Hybrid Mode

Enable both Groq and local responses:

```javascript
export const chatbotConfig = {
  aiService: 'hybrid', // Use both Groq and local
  // ... other config
};
```

### Custom System Prompts

Modify the AI personality in `src/config/chatbot.js`:

```javascript
export const groqConfig = {
        systemPrompt: `You are Darsh Shah's AI assistant...`,
  // ... other config
};
```

## 📊 Usage Monitoring

### Track Your Free Tier Usage

1. **Visit**: [console.groq.com](https://console.groq.com)
2. **Dashboard**: Check usage statistics
3. **Limit**: 100 requests/day
4. **Reset**: Daily at midnight UTC

### Cost Analysis

- **Free Tier**: 100 requests/day = **$0/month**
- **Paid Tier**: $0.50 per 1M tokens (very cheap)
- **Portfolio Usage**: Likely under 50 requests/day

## 🎉 Benefits for Your Portfolio

### Technical Skills Demonstrated

1. **API Integration**: Shows backend knowledge
2. **Error Handling**: Demonstrates robust coding
3. **Fallback Systems**: Shows production-ready thinking
4. **Environment Management**: Shows DevOps awareness

### User Experience

1. **Lightning Fast**: Responses in milliseconds
2. **Intelligent**: Real AI understanding
3. **Professional**: High-quality responses
4. **Reliable**: Always works with fallback

## 🔮 Future Enhancements

### Easy Upgrades

1. **Add More AI Services**: OpenAI, Hugging Face
2. **Conversation Memory**: Remember chat history
3. **Multi-language**: Support different languages
4. **Voice Integration**: Speech-to-text

### Advanced Features

1. **Analytics**: Track visitor questions
2. **Personalization**: Adapt to user behavior
3. **Learning**: Improve responses over time
4. **Integration**: Connect with other portfolio sections

## 🆘 Need Help?

### Resources

- **Groq Documentation**: [docs.groq.com](https://docs.groq.com)
- **API Reference**: [api.groq.com](https://api.groq.com)
- **Community**: [discord.gg/groq](https://discord.gg/groq)

### Support

- **Groq Support**: Available in console
- **Portfolio Issues**: Check this guide first
- **Code Problems**: Review console errors

---

**🎯 Goal**: Get your chatbot running with Groq in under 10 minutes!

**💡 Pro Tip**: Start with the free tier, then upgrade only if you need more requests.
